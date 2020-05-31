<template>
  <div class="home">
    <Top v-bind:heading="heading" />
    
    <p v-if="activeCard.isActive"
      class="activeP">ACTIVE CARD</p>
    <Card
      v-bind:cardNo="activeCard.cardNo"
      v-bind:name="activeCard.name"
      v-bind:validThruMonth="activeCard.validThruMonth"
      v-bind:validThruYear="activeCard.validThruYear"
      v-bind:ccv="activeCard.ccv"
      v-bind:vendor="activeCard.vendor"
      v-bind:isActive="activeCard.isActive"
    />

    <CardStack
      v-bind:allCards="allCards"
      v-on:activateCard="activateCard"
    />

    <router-link to="/add-card">
      <button v-if="allCards.length > 0"
        class="add-new-card-btn"
        >ADD A NEW CARD</button>
      <button v-else
        class="add-first-card-btn"
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
      return this.$root.getThisCard()
    },
    allCards() {
      return this.$root.getAllCards();
    },
  },
  methods: {
    activateCard(cardToActivate) {  
      this.$root.activateCard(cardToActivate);
    }
  }
}
</script>

<style lang="scss">
div .home {
  width: 100%;
  margin: 0 auto;
  p {
    font-size: 0.6rem;
    font-weight: bold;
    margin: 1.3rem 0 0.4rem 0;
  }
  button.add-new-card-btn {
  border: solid black 0.08rem;
  background: inherit;
  margin: 12rem auto;
  }
  button.add-first-card-btn {
    margin: 3rem auto;
    border: solid black 0.08rem;
  }
  p.activeP {
    color: #666;
  }
}


</style>
