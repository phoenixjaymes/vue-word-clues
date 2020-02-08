<template>
  <TheLayout
    header="Clues Menu"
  >
    <nav class="nav">
      <div v-for="language in languageArray" v-bind:key="language.id">
        <h2 class="languageHeader">{{language.name}}</h2>
        <ul v-for="category in language.data" v-bind:key="category.id">
          <li class="subMenuWrap">
            <h3>{{category.category.charAt(0).toUpperCase() + category.category.slice(1)}}</h3>

            <ul class="subMenu">
              <li v-for="group in category.data" v-bind:key="group.id">
                <button
                  class="button"
                  type="button"
                  v-on:click="handleGroupClick(language.language, category.category, group.id)"
                >
                  {{group.name}}
                </button>
              </li>
            </ul>

          </li>
        </ul>
      </div>
    </nav>
  </TheLayout>
</template>

<script>
import { store } from '../store';
import TheLayout from './TheLayout';

export default {
  name: 'MenuPage',
  components: {
    TheLayout,
  },
  data() {
    return { storeState: store.state } 
  },
  computed: {
    languageArray() {
      return this.storeState.wordsData;
    },
  },
  methods: {
    handleGroupClick(language, category, group) {
      const menuObj = {
        language,
        category,
        group,
      };
      store.changeSection('clues', menuObj);
    }
  },
}
</script>

<style scoped>
.subMenuWrap {
  background: #FFF6CF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
}

.subMenu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 115px));
  gap: 1px 1px;
  align-items: center;
  justify-content: center;
  justify-items: center;
}

.button {
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
  background: #BDB387;
  background: #8A8BC5;
  color: #fff;
}

.languageHeader {
  color: #fff;
  margin-bottom: 15px;
}

.categoryHeader {
  margin-bottom: 10px;
}
</style>
