<template>
  <div class="card-stack">
    
    <Card v-for="(card, index) in allCards"
      v-bind:key="index"
      v-bind:cardNo="card.cardNo"
      v-bind:name="card.name"
      v-bind:validThruMonth="card.validThruMonth"
      v-bind:validThruYear="card.validThruYear"

    />

  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'CardStack',
  components: {
      Card,
  },
  props: {
    cardNo: String,
    name: String,
    validThruMonth: String,
    validThruYear: String,
    ccv: String,
    vendor: String,
  },
  computed: {
    allCards() {
      return this.$root.getAllCards();
    },
}
</script>

<style lang="scss">

</style>