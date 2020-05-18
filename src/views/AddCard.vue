<template>
  <div class="add-card">
    <Top v-bind:heading="heading"
    
    />
    <Card 
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
