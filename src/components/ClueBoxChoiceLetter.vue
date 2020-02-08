<template>
  <div class="wrap">
      <button
        class="button"
        type="button"
        v-on:click="handleClick()"
        v-bind:disabled="letter.isDisabled"
      >
        {{letter.letter}}
      </button>
    </div>
</template>

<script>
export default {
  name: 'ClueBoxChoiceLetter',
  props: {
    letter: Object,
    handleChoiceClick: Function,
  },
  methods: {
    handleClick() {
      const choiceObj = {
        choiceId: this.letter.id,
        choiceLetter: this.letter.letter,
      };

      this.handleChoiceClick(choiceObj);
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

.button:hover {
  background: #FDF7E0;
}

.button:active {
  background: #E1D5A0;
}

.button[disabled] {
  background: #FDF9E7;
  border: none;
  color: #826E5E;
  cursor: auto;
}
</style>
