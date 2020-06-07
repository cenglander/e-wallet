<template>
  <div class="card-stack">
    <Card 
      @click.native="activateCard(card)"
      v-for="(card, index) in cardStack"
      :key="index"
      :cardNo="card.cardNo"
      :name="card.name"
      :validThruMonth="card.validThruMonth"
      :validThruYear="card.validThruYear"
      :ccv="card.ccv"
      :vendor="card.vendor"
      :isActive="card.isActive"
      :style="{zIndex: index}"
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
    cardStack: Array,
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