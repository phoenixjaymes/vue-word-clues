<template>
  <header class="header">
    <div class="inner">
      <nav>
        <ul class="ul">
          <li><button class="button" v-on:click.prevent="handleNavClick('home')">Home</button></li>
          <li><button class="button" v-on:click.prevent="handleNavClick('menu')">Clues</button></li>
          <li><button class="button" disabled>Language</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from '../store';

export default {
  name: 'TheHeader',
  data() {
    return { storeState: store.state };
  },
  methods: {
    handleNavClick(section) {
      store.changeSection(section);
    }
  }  
}
</script>

<style scoped>
.header {
  background: #FFF6CF;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
}

.ul li {
  display: inline;
  padding: 0 3px;
}

.button {
  background: #ADA16A;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: .80rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 30px;
  min-width: 90px;
}

.button:hover {
  background: #BDB387;
  color: #333;
}

.button[disabled] {
  background: #CDC6A5;
  color: #777;
  cursor: auto;
  opacity: .3;
}

</style>
