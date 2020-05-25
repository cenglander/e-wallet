<template>
  <div class="card-stack">
    <Card 
      v-for="(card, index) in allCards"
      v-bind:key="index"
      v-bind:cardNo="card.cardNo"
      v-bind:name="card.name"
      v-bind:validThruMonth="card.validThruMonth"
      v-bind:validThruYear="card.validThruYear"
      v-bind:ccv="card.ccv"
      v-bind:vendor="card.vendor"
      v-bind:isActive="card.isActive"

      v-on:click="activateCard(card)"

    /> 
<!-- v-on:click="activateCard(this.card)" -->


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
    // activateCard(cardToActivate) {
    //   cardToActivate.isActive = true;
    //   this.$emit('activateCard', cardToActivate);
    // },
  },
}
</script>

<style scoped lang="scss">
div.card-stack {
  display: grid;
  grid-auto-rows: 30px;
  
}

</style>