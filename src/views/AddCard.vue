<template>
  <div class="add-card">
    <Top v-bind:heading="heading"
    
    />
    <Card  
      v-bind:cardNo="this.cardNo"
      v-bind:name="this.name"
      validThruMonth="MM"
      validThruYear="YY"
      vendor="placeholder"
      isActive="true"
      v-bind:style="{backgroundColor: vendor}"
    />
    <CardForm
      v-on:displayNo="displayNoOnCard"
    />

  </div>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'


export default {
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm,
  },
  data: () => ({
      heading: "ADD A NEW BANK CARD",
      cardNo: "",
      name: "",

  }),
  methods: {
    displayNoOnCard(payload) {
      this.cardNo = payload;
    }
  }
}
</script>
<style scoped lang="scss">
  div .add-card {
    width: 90vw;
    margin: 0 auto;
  }
</style>
