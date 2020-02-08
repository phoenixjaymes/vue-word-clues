<template>
  <footer class="footer">
    <small>&copy; {{ currentYear }} PhoenixJaymes</small>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return { currentYear: new Date().getFullYear() };
  },
}
</script>

<style scoped>
.footer {
  background: #FFF6CF;
  height: 30px;
  line-height: 30px;
}
</style>
