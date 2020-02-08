<template>
  <div>
    <ClueBox
      v-for="word in wordList" v-bind:key="word.id"
      v-bind:clue="word.clue"
      v-bind:word="word.word"
    ></ClueBox>
  </div>
</template>

<script>
import { store } from '../store';
import ClueBox from './ClueBox';

export default {
  name: 'ClueBoxContainer',
  components: {
    ClueBox,
  },
  data() {
    return {storeState: store.state};
  },
  computed: {
    wordList() {
      return this.storeState.wordList;
    }
  }
}
</script>

<style scoped>

</style>
