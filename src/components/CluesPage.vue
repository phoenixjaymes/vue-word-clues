<template>
  <TheLayout
    header="Clues Main"
  >
    <ClueBoxContainer></ClueBoxContainer>
  </TheLayout>
</template>

<script>
import TheLayout from './TheLayout';
import ClueBoxContainer from './ClueBoxContainer';

export default {
  name: 'CluesPage',
  components: {
    TheLayout,
    ClueBoxContainer,
  },
}
</script>

<style scoped>

</style>
