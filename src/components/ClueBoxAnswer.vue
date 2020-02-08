<template>
  <div class="answerCcontainer">
    <ClueBoxAnswerLetter
      v-for="letter in answerWordArray"
      v-bind:key="letter.id"
      v-bind:letter="letter"
      v-bind:is-checking-answer="isCheckingAnswer"
      v-bind:handle-answer-click="handleAnswerClick"
      v-bind:answer-is-correct="answerIsCorrect"
    />
  </div>
</template>

<script>
import ClueBoxAnswerLetter from './ClueBoxAnswerLetter';

export default {
  name: 'ClueBoxAnswer',
  components: {
    ClueBoxAnswerLetter,
  },
  props: {
    answerIsCorrect: Boolean,
    answerWordArray: Array,
    isCheckingAnswer: Boolean,
    handleAnswerClick: Function,
  }
}
</script>

<style scoped>
.answerCcontainer {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 41px;
  margin-bottom: 5px;
  background-color: rgba(173, 161, 106, .4);
}
</style>
