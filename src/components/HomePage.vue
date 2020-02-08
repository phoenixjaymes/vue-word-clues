<template>
  <TheLayout
    header=""
  >
    <div class="homeContainer">
      <img v-bind:src="require('../assets/cologne-640.jpg')" alt="Köln at night" />
      <p>If you aren’t planning a trip anytime soon. You may need to brush up on you German of Dutch vocabulary? Specifcally food, clothing and other basics.</p>
      <p>Then this is the place to do it and have fun in the process. Practice here with this simple word scramble game.</p>
      <p>Simply figure out the clue and unscramble the letters. That's all that you have to do. Simple, easy and a little bit of fun.</p>
    </div>
  </TheLayout>
</template>

<script>
import TheLayout from './TheLayout';

export default {
  name: 'HomePage',
  components: {
    TheLayout,
  },
}
</script>

<style scoped>
.homeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: solid 1px #FFF6CF;
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px;
}

.container img {
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
}

.container p {
  color: #fff;
  margin-bottom: 20px;
  text-align: left;
}

</style>
