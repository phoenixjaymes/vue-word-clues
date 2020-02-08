<template>
  <div v-bind:class="classNames">
    <ClueBoxChoiceLetter
      v-for="letter in choiceWordArray"
      v-bind:key="letter.id"
      v-bind:letter="letter"
      v-bind:handle-choice-click="handleChoiceClick"
    />
  </div>
</template>

<script>
import ClueBoxChoiceLetter from './ClueBoxChoiceLetter';

export default {
  name: 'ClueBoxChoice',
  components: {
    ClueBoxChoiceLetter,
  },
  props: {
    choiceWordArray: Array,
    handleChoiceClick: Function,
    answerIsCorrect: Boolean,
  },
  computed:{
    classNames() {
      return !this.answerIsCorrect ? 'container' : 'container hidden';
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  height: 41px;
}

.container.hidden {
  animation: shrinkChoice .5s ease-in 2.6s forwards;
}

.container.hidden > div {
  display: none;
}

@keyframes shrinkChoice {
  from {
    height: 41px;
  }
  to {
    height: 0;
  }
}
</style>
