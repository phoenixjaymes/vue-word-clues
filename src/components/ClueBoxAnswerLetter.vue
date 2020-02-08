<template>
  <div class="wrap" v-if="answerIsCorrect">
    <button class="button" type="button" disabled>{{letter.choiceLetter}}</button>
  </div>

  <div class="wrap" v-else-if="letter.choiceLetter !== ''">
    <button v-bind:class="btnClassName" type="button" v-on:click="handleClick()">{{letter.choiceLetter}}</button>
  </div>

  <div class="wrap" v-else>
    <span>{{letter.choiceLetter}}</span>
  </div>
</template>

<script>
export default {
  name: 'ClueBoxAnswerLetter',
  props: {
    letter: Object,
    isCheckingAnswer: Boolean,
    handleAnswerClick: Function,
    answerIsCorrect: Boolean,
  },
  computed:{
    btnClassName() {
      return (this.isCheckingAnswer && !this.letter.isCorrect) ? 'buttonChecking' : 'button';
    }
  },
  methods: {
    handleClick() {
      const answerObj = {
        positionId: this.letter.id,
        choiceId: this.letter.choiceId,
        choiceLetter: this.letter.letter,
      };
      this.handleAnswerClick(answerObj)
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 5px;
  height: 35px;
  margin: 1px;
  width: 35px;
  background: #ddd;
}

.button {
  background: #FAEDB2;
  border-radius: 5px;
  color: #4D301A;
  cursor: pointer;
  font-size: .9rem;
  font-weight: bold;
  height: 35px;
  width: 35px;
}

.buttonChecking {
  background: #FAEDB2;
  border-radius: 5px;
  color: #4D301A;
  cursor: pointer;
  font-size: .9rem;
  font-weight: bold;
  height: 35px;
  width: 35px;
  border-color: #f00;
}

.button:hover {
  background: #FDF7E0;
}

.button:active {
  background: #E1D5A0;
}

</style>
