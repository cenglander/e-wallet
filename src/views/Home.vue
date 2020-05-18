<template>
  <div class="home">
    <Top v-bind:heading="heading"
    />
    <Card
    />
    <CardStack
    />
    <router-link to="/add-card">
      <button class="add-new-card">ADD A NEW CARD</button>
    </router-link>

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
  },
  data: () => ({
        heading: "E-WALLET"

    }),
}
</script>

<style lang="scss">
div .home {
  width: 90vw;
  height: 80vh;
  // background: lightcoral;
  // display: flex;
  // justify-content: center;
  margin: auto;

}
.add-new-card {
  width: 90vw;
  padding: 2vh 0;
  border-radius: 0.5rem;
  border: solid black 0.08rem;
  background: inherit;
}

</style>
