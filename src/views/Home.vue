<template>
  <div class="home">
    <Top v-bind:heading="heading"

    />
    
    <Card  
      v-bind:cardNo="activeCard.cardNo"
      v-bind:name="activeCard.name"
      v-bind:validThruMonth="activeCard.validThruMonth"
      v-bind:validThruYear="activeCard.validThruYear"
      v-bind:vendor="activeCard.vendor"
      v-bind:isActive="activeCard.isActive"
    />

    <CardStack
      v-bind:allCards="allCards"
    />

    <router-link to="/add-card">
      <button v-if="allCards.length > 0"
        class="add-new-card"
        >ADD A NEW CARD</button>
      <button v-else
        class="add-first-card"
        >ADD A NEW CARD</button>
    </router-link>

  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack,
  },
  data: () => ({
        heading: "E-WALLET",

    }),
  computed: {
    activeCard() {
      return this.$root.getThisCard(1234567891011123)
    },
    allCards() {
      return this.$root.getAllCards();
    }

  }
}
</script>

<style lang="scss">
div .home {
  width: 90vw;
  // background: lightcoral;
  margin: 0 auto;

}
button.add-new-card {
  border: solid black 0.08rem;
  background: inherit;
  margin: 22vh auto;
}
button.add-first-card {
  margin: 10vh auto;
  border: solid black 0.08rem;
}

</style>
