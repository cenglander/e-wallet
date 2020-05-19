<template>
  <div class="add-card">
    <Top v-bind:heading="heading"
    
    />
    <Card  
      cardNo="XXXX XXXX XXXX XXXX"
      name="FIRSTNAME LASTNAME"
      validThruMonth="MM"
      validThruYear="YY"
      vendor="placeholder"
      isActive="true"
      v-bind:style="{backgroundColor: vendor}"
    />
    <CardForm
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
      heading: "ADD A NEW BANK CARD"
  })
}
</script>
<style scoped lang="scss">
  div .add-card {
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
  }
</style>
