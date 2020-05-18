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

<style lang="scss">

</style>
