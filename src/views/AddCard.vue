<template>
  <div class="add-card">
    <Top v-bind:heading="heading"/>
    <p>NEW CARD</p>
    <Card  
      v-bind:cardNo="this.cardNo"
      v-bind:name="this.name"
      v-bind:validThruMonth="this.validThruMonth"
      v-bind:validThruYear="this.validThruYear"
      v-bind:vendor="this.vendor"
      v-bind:style="{backgroundColor: vendor}"
    />
    <CardForm
      v-on:displayNo="displayNoOnCard"
      v-on:displayName="displayNameOnCard"
      v-on:displayValidThru="displayValidThruOnCard"
      v-on:displayVendor="displayVendorOnCard"
      v-on:saveNewCard="saveNewCard"
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
      cardNo: "XXXXXXXXXXXXXXXX",
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
      this.name = payload;
    },
    displayValidThruOnCard(payload) {
      this.validThruMonth = payload.substring(0, 2);
      this.validThruYear = payload.substring(2);
    },
    displayVendorOnCard(payload) {
      this.vendor = payload;
    },
    saveNewCard(payload) {
      this.$root.saveNewCard(payload);
    },
  }
}
</script>
<style scoped lang="scss">
  div .add-card {
    width: 90vw;
    margin: 0 auto;
  }
  p {
    color: #666;
    font-size: 0.6rem;
    font-weight: bold;
    margin: 1.3rem 0 0.4rem 0;
  }
</style>
