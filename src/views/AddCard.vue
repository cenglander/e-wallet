<template>
  <div class="add-card">
    <Top v-bind:heading="heading"
    
    />
    <Card  
      v-bind:cardNo="this.cardNo"
      v-bind:name="this.name"
      v-bind:validThruMonth="this.validThruMonth"
      v-bind:validThruYear="this.validThruYear"
      vendor="placeholder"
      isActive="true"
      v-bind:style="{backgroundColor: vendor}"
    />
    <CardForm
      v-on:displayNo="displayNoOnCard"
      v-on:displayName="displayNameOnCard"
      v-on:displayValidThru="displayValidThruOnCard"
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
      cardNo: "XXXX XXXX XXXX XXXX",
      name: "FIRSTNAME LASTNAME",
      validThruMonth: "",
      validThruYear: "",
      ccv: "",
      vendor: "",


  }),
  methods: {
    displayNoOnCard(payload) {
      this.cardNo = payload;
    },
    displayNameOnCard(payload) {
      this.name = payload.toUpperCase();
    },
    displayValidThruOnCard(payload) {
      this.validThruMonth = payload.substring(0, 2);
      this.validThruYear = payload.substring(2);
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
