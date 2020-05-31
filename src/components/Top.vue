<template>
  <header class="top">
    <h1>{{ heading }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Top',
  props: {
      heading: String,
  },
}
</script>

<style scoped lang="scss">
  header.top {
    display: flex;
    justify-content: center;
    h1 {
    margin-top: 2.1rem;
    max-width: 15rem;
    font-size: 1.7rem;
    font-weight: 700;
    }
  }
</style>
