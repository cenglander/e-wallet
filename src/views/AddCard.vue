<template>
  <div class="add-card">
    <Top v-bind:heading="heading"
    
    />
    <Card  
      v-bind:cardNo="this.cardNo"
      v-bind:name="this.name"
      v-bind:validThruMonth="this.validThruMonth"
      v-bind:validThruYear="this.validThruYear"
      v-bind:vendor="this.vendor"
      isActive="true"
      v-bind:style="{backgroundColor: vendor}"
    />
    <!-- vendor=placeholder -klass för att kortet ska 
      vara grått -->
    <CardForm
      v-on:displayNo="displayNoOnCard"
      v-on:displayName="displayNameOnCard"
      v-on:displayValidThru="displayValidThruOnCard"
      v-on:displayVendor="displayVendorOnCard"
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
      validThruMonth: "MM",
      validThruYear: "YY",
      ccv: "",
      vendor: "placeholder",


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
    },
    displayVendorOnCard(payload) {
      this.vendor = payload;
    },
  }
}
</script>
<style scoped lang="scss">
  div .add-card {
    width: 90vw;
    margin: 0 auto;
  }
</style>
