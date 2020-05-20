<template>
  <div class="card-form">
    <label>CARD NUMBER {{cardNo}} </label>
    <input v-model="cardNo" placeholder="XXXX">
    <label>CARDHOLDER NAME</label>
    <input v-model="name" placeholder="FIRSTNAME LASTNAME">
    <label class="test">VALID THRU</label>
    <input v-model="validThruMonth" class="test">
    <!-- plus validThruYear! -->
    <label class="test">CCV</label>
    <input v-model="ccv" class="test">
    <label>VENDOR</label>
    <select v-model="vendor">
      <option v-for="vendor in vendorList"
        v-bind:key="vendor.value"
        v-bind:value="vendor.value">
        {{ vendor.text }}
      </option>
    </select>
    <button class="add-card-btn">
      ADD CARD
    </button>

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
.test {
  // position: static;
  width: 40%;
}
  div.card-form {
    display: grid;
    // grid-template-rows: 5% 10% 5% 10% 5% 10% 5% 10% 5% 10% 25%;
  }
  label {
    font-size: 0.7rem;
    margin-top: 1vh;
  }
  input, select {
    padding: 2vh;
    border-radius: 0.5rem;
    border: solid black 0.08rem;
    font-size: 1rem;
    font-weight: 800;
  }
  label, input, select {
    font-family: 'Courier New', Courier, monospace;
  }
  button.add-card-btn {
    background: #000;
    color: white;
    margin: 5vh auto;
  }
</style>