<template>
  <div class="card-stack">
    
    <Card 
      v-for="(card, index) in allCards"
      v-bind:key="index"
      v-bind:cardNo="card.cardNo"
      v-bind:name="card.name"
      v-bind:validThruMonth="card.validThruMonth"
      v-bind:validThruYear="card.validThruYear"
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
  computed: {
  }
}
</script>

<style lang="scss">

</style>