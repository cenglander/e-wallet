<template>
  <div class="card-stack">
    <Card 
      v-on:click.native="activateCard(card)"

      v-for="(card, index) in allCards"
      v-bind:key="index"
      v-bind:cardNo="card.cardNo"
      v-bind:name="card.name"
      v-bind:validThruMonth="card.validThruMonth"
      v-bind:validThruYear="card.validThruYear"
      v-bind:ccv="card.ccv"
      v-bind:vendor="card.vendor"
      v-bind:isActive="card.isActive"

    /> 

  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  //name: 'CardStack',
  components: {
      Card,
  },
  props: {
    allCards: Array,
  },
  methods: {
    activateCard(cardToActivate) {
      this.$emit('activateCard', cardToActivate);
    },

  },
}
</script>

<style scoped lang="scss">
div.card-stack {
  display: grid;
  grid-auto-rows: 50px;
  margin-top: 2rem;
}
</style>