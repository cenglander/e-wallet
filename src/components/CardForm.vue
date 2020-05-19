<template>
  <div class="card-form">
    <p>CARD NUMBER {{cardNo}} </p>
    <input v-model="cardNo" placeholder="XXXX">
    <p>CARDHOLDER NAME</p>
    <input v-model="name" placeholder="FIRSTNAME LASTNAME">
    <p>VALID THRU</p>
    <input v-model="validThruMonth">
    <!-- plus validThruYear! -->
    <p>CCV</p>
    <input v-model="ccv">
    <p>VENDOR</p>
    <select v-model="vendor">
      <option v-for="vendor in vendorList"
        v-bind:key="vendor.value"
        v-bind:value="vendor.value">
        {{ vendor.text }}
      </option>
    </select>

  </div>
</template>

<script>


export default {
  name: 'CardForm',
  components: {
  },
  data: () => ({
      vendorList: [
        { text: 'Bitcoin Inc', value: 'bitcoin' },
        { text: 'Ninja Bank', value: 'ninja' },
        { text: 'Block Chain Inc', value: 'blockchain' },
        { text: 'Evil Corp', value: 'evil' },
      ]
  })
}
</script>

<style scoped lang="scss">
  p {
    font-size: 0.6rem;
    padding-top: 10rem;
  }
</style>