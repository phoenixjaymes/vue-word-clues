<template>
  <div class="container">
    <h3 class="header">{{clue}}</h3>
    <ClueBoxAnswer
      v-bind:answer-is-correct="answerIsCorrect"
      v-bind:answer-word-array="answerWordArray"
      v-bind:is-checking-answer="isCheckingAnswer"
      v-bind:handle-answer-click="handleAnswerClick"
    />
    <ClueBoxChoice
      v-bind:answer-is-correct="answerIsCorrect"
      v-bind:choice-word-array="choiceWordArray"
      v-bind:handle-choice-click="handleChoiceClick"
    />

    <button v-bind:class="buttonClassName" type="button" v-on:click="checkAnswer()">Check</button>

    <div v-bind:class="correctBoxClassName">
      <h3>{{answerUpperCase}}</h3>
      <p>Your answer is correct</p>
    </div>
  </div>
</template>

<script>
import ClueBoxAnswer from './ClueBoxAnswer';
import ClueBoxChoice from './ClueBoxChoice';

export default {
  name: 'ClueBox',
  components: {
    ClueBoxAnswer,
    ClueBoxChoice,
  },
  props: {
    clue: String,
    word: String,
  },
  data() {
    return {
      answerWordArray: this.answerArray,
      choiceWordArray: this.choiceArray,
      isCheckingAnswer: false,
      answerIsCorrect: false,
    };
  },
  computed: {
    answerArray() {
      const answerArray = Array.from(this.word.toLowerCase()).map((letter, index) => (
        {
          id: index,
          letter,
          choiceLetter: '',
          choiceId: '',
          isCorrect: false,
        }
      ));
      return answerArray;
    },
    choiceArray() {
      const choiceArray = Array.from(this.word.toLowerCase()).map((letter, index) => (
        {
          id: index,
          letter,
          value: '',
          isDisabled: false,
        }
      ));
      return choiceArray;
    },
    answerUpperCase() {
      return this.word.charAt(0).toUpperCase() + this.word.slice(1)
    },
    buttonClassName() {
      return this.answerIsCorrect ? 'buttonCorrect' : 'button';
    },
    correctBoxClassName() {
      return this.answerIsCorrect ? 'correctBox show ': 'correctBox';
    }
  },
  created() {
    this.answerWordArray = this.answerArray;
    this.choiceWordArray = this.shuffle(this.choiceArray);
  },
  methods: {
    shuffle(array) {
      const oldArray = [...array];
      const newArray = [];

      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));

        const tempArray = oldArray.splice(j, 1);
        newArray.push(tempArray[0]);
      }

      newArray.push(oldArray[0]);
      return newArray;
    },
    checkAnswer() {
      let filledLetterCount = 0;
      let numberCorrect = 0;
      const wordLength = this.answerWordArray.length;

      // loop over answer and check choice letter != '', add to cntr,
      for (let i = 0; i < wordLength; i += 1) {
        if (this.answerWordArray[i].choiceLetter !== '') {
          filledLetterCount += 1;
        }
      }

      if (filledLetterCount === wordLength) {
        this.isCheckingAnswer = true;

        const tempArray = this.answerWordArray.map((letter) => {
          if (letter.letter === letter.choiceLetter) {
            numberCorrect += 1;
            return {
              ...letter,
              isCorrect: true,
            };
          }
          return {
            ...letter,
            isCorrect: false,
          };
        });

        if (numberCorrect === wordLength) {
          this.answerIsCorrect = true;
        }

        this.answerWordArray = tempArray;
      } else {
        this.isCheckingAnswer = false;
      }
    },
    handleAnswerClick(answerObj) {
      const tempAnswerArray = [];
      const tempChoiceArray = [];

      // Answer word
      for (let i = 0; i < this.answerWordArray.length; i += 1) {
        if (this.answerWordArray[i].id === answerObj.positionId) {
          const obj = {
            ...this.answerWordArray[i],
            choiceLetter: '',
            choiceId: '',
          };

          tempAnswerArray.push(obj);
        } else {
          tempAnswerArray.push(this.answerWordArray[i]);
        }
      }

      // Choice word
      for (let i = 0; i < this.choiceWordArray.length; i += 1) {
        if (this.choiceWordArray[i].id === answerObj.choiceId) {
          const obj = {
            ...this.choiceWordArray[i],
            isDisabled: false,
          };

          tempChoiceArray.push(obj);
        } else {
          tempChoiceArray.push(this.choiceWordArray[i]);
        }
      }

      this.answerWordArray = tempAnswerArray;
      this.choiceWordArray = tempChoiceArray;
    },
    handleChoiceClick(choiceObj) {
      const tempAnswerArray = [];
      const tempChoiceArray = [];
      let emptyAnswerFound = false;

      this.isCheckingAnswer = false;

      // Answer word
      for (let i = 0; i < this.answerWordArray.length; i += 1) {
        if (this.answerWordArray[i].choiceLetter === '' && emptyAnswerFound === false) {
          const obj = {
            ...this.answerWordArray[i],
            choiceLetter: choiceObj.choiceLetter,
            choiceId: choiceObj.choiceId,
          };

          tempAnswerArray.push(obj);
          emptyAnswerFound = true;
        } else {
          tempAnswerArray.push(this.answerWordArray[i]);
        }
      }

      // Choice word
      for (let i = 0; i < this.choiceWordArray.length; i += 1) {
        if (this.choiceWordArray[i].id === choiceObj.choiceId) {
          const obj = {
            ...this.choiceWordArray[i],
            isDisabled: true,
          };

          tempChoiceArray.push(obj);
        } else {
          tempChoiceArray.push(this.choiceWordArray[i]);
        }
      }

      this.answerWordArray = tempAnswerArray;
      this.choiceWordArray = tempChoiceArray;
    },
  }
}
</script>

<style scoped>
.container {
  background: #FFF6CF;
  border-radius: 10px;
  margin: 0 0 5px 0;
  overflow: hidden;
  padding-top: 5px;
  position: relative;
}

.header {
  font-size: 1rem;
  margin-bottom: 5px;
}

.button,
.buttonCorrect {
  background: #5859AD;
  border-radius: 5px;
  color: #FFF6CF;
  cursor: pointer;
  display: inline-block;
  font-size: .9rem;
  font-weight: bold;
  height: 30px;
  letter-spacing: 1px;
  margin: 5px;
  padding: 5px;
  width: 110px;
}

.button:hover {
  background: #8A8BC5;
  color: #fff;
}

.buttonCorrect {
  animation: fadeButton .5s ease-in 2.6s forwards;
}

.correctBox {
  position: absolute;
  left: 0;
  top: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(250, 237, 177, .95);
  height: 100%;
  opacity: 0;
  width: 100%;
}

.correctBox.show {
  animation: correctShow .1s ease-in forwards, correctFade 2.5s ease-in-out .1s forwards;
}


@keyframes fadeButton {
  from {
    height: 30px;
    margin: 5px;
    opacity: 1;
    transform: scale(1);
  }
  to {
    height: 0;
    margin: 0;
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes correctShow {
  from {
    top: 600px;
  }
  to {
    top: 0;
  }
}

@keyframes correctFade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
