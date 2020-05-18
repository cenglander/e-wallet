<template>
  <div class="home">
    <h1>E-WALLET</h1>
    <Top
    />
    <Card
    />
    <CardStack
    />

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/Top.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack,
  }
}
</script>

<style lang="scss">
div .home {
  width: 90vw;
  height: 80vh;
  // background: lightcoral;
  display: flex;
  justify-content: center;
  margin: auto;


}
</style>
