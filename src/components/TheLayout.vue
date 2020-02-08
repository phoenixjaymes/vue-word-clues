<template>
  <div class="container">
    <TheHeader handleSectionClick={handleSectionClick}></TheHeader>
    <main class="main">
      <h1 class="header">{{header}}</h1>
      <div class="inner">
        <slot></slot>
      </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
  },
  props: {
    header: String,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  /* background: #3B382A; */
  background: transparent;
  margin: 0 auto;
  
  min-height: 100vh;
  text-align: center;
}

.main {
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  padding: 0 10px;
  width: 100%;
}

.header {
  color: #FFF6CF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.7rem;
  margin-bottom: 10px;
}
</style>
