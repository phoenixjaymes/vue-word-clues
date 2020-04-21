<template>
  <div id="app">
    <component v-bind:is="componentName"></component>
  </div>
</template>

<script>
import { store } from './store';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CluesPage from './components/CluesPage';

export default {
  name: 'app',
  components: {
    HomePage,
    MenuPage,
    CluesPage,
  },
  data() {
    return {
      storeState: store.state,
    }
  },
  computed: {
    componentName() {
      const section = this.storeState.section;
      const sectionUCase = section.charAt(0).toUpperCase() + section.substring(1);
      return sectionUCase + 'Page';
    }
  },
  created() {
    this.fetchClues()
  },
  methods: {
    fetchClues() {
      fetch('https://phoenixjaymes.com/assets/data/language/clues/')
      .then((reponse) => reponse.json())
      .then((responseData) => {
        // loading: false

        if (responseData.status === 'success') {
          store.setWordsData(responseData.data);
        }
      })
      .catch((error) => {
        // loading: false
        window.console.log(error);
      });
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #000;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
}

ul {
  list-style: none;
}
</style>
