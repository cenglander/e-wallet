<template>
  <div class="add-card">
    <h1>ADD A NEW BANK CARD</h1>
    <Top 
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
  }
}
</script>
