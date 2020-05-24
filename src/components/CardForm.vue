<template>
  <div class="card-form">
    <form action="">
      <label>CARD NUMBER {{cardNo}} </label>
      <input v-model="cardNo" 
        v-on:keyup="displayNoOnCard">

      <label>CARDHOLDER NAME</label>
      <input v-model="name"
        v-on:keyup="displayNameOnCard"
        placeholder="FIRSTNAME LASTNAME">

      <label class="left">VALID THRU</label>
      <input v-model="validThru" 
        v-on:keyup="displayValidThruOncard" 
        class="left">
      <!-- ta in 4 tecken, emitta, metod i AddCard som delar -->

      <label class="right">CCV</label>
      <input v-model="ccv" 
        class="right">

      <label>VENDOR</label>
      <select v-model="vendor">
        <option v-for="vendor in vendorList"
          v-bind:key="vendor.value"
          v-bind:value="vendor.value">
          {{ vendor.text }}
        </option>
      </select>
    </form>

    <button class="add-card-btn">ADD CARD</button>

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
    ],
    cardNo: "",
  }),
  methods: {
    displayNoOnCard() {
      this.$emit('displayNo', this.cardNo)
    },
    displayNameOnCard() {
      this.$emit('displayName', this.name)
    },
    displayValidThruOncard() {
      this.$emit('displayValidThru', this.validThru)
    }

  }
}
</script>

<style scoped lang="scss">
.left {
  width: 40%;
  text-align: left;
}
.right {
  width: 40%;
  text-align: left;
  // position: relative;
  // left: 50%;
}
  div.card-form {
    display: grid;
    // grid-template-rows: 5% 10% 5% 10% 5% 10% 5% 10% 5% 10% 25%;
  }
  form {
    text-align: left;
  }
  form label {
    font-size: 0.7rem;
    margin-top: 1vh;
  }
  form input, select {
    padding: 2vh;
    border-radius: 0.5rem;
    border: solid black 0.08rem;
    font-size: 1rem;
    font-weight: 800;
    display: block;
  }
  form label, input, select, option {
    font-family: 'Courier New', Courier, monospace;
    width: 300px;
    // margin-left: auto;
    // margin-right: auto;
  }
  button.add-card-btn {
    background: #000;
    color: white;
    margin: 5vh auto;
  }
</style>