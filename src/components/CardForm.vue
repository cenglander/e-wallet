<template>
  <div class="card-form">
    <form action="">
      <label>CARD NUMBER {{ this.card.cardNo }} </label>
      <input v-model="card.cardNo" 
        v-on:keyup="displayNoOnCard"
        :maxlength="16">

      <label>CARDHOLDER NAME</label>
      <input v-model="card.name"
        v-on:keyup="displayNameOnCard"
        placeholder="FIRSTNAME LASTNAME"
        :maxlength="30">

      <label class="left">VALID THRU</label>
      <input v-model="validThru" 
        v-on:keyup="displayValidThruOncard(); splitValidThru()" 
        class="left"
        :maxlength="4">

      <label class="right">CCV</label>
      <input v-model="card.ccv" 
        class="right"
        :maxlength="3">

      <label>VENDOR</label>
      <select v-model="card.vendor"
        v-on:change="displayVendorOnCard">
        <option v-for="vendor in vendorList"
          v-bind:key="vendor.value"
          v-bind:value="vendor.value">
          {{ vendor.text }}
        </option>
      </select>
    </form>

    <router-link to="/">
      <button class="add-card-btn"
        v-on:click="saveNewCard">ADD CARD</button>
    </router-link>
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
    card: {
      cardNo: "",
      name: "",
      validThruMonth: "",
      validThruYear: "",
      ccv: "",
      vendor: "",
      isActive: true,
    },
  }),
  methods: {
    displayNoOnCard() {
      this.$emit('displayNo', this.card.cardNo)
    },
    displayNameOnCard() {
      this.$emit('displayName', this.card.name)
    },
    displayValidThruOncard() {
      this.$emit('displayValidThru', this.validThru)
    },
    displayVendorOnCard() {
      this.$emit('displayVendor', this.card.vendor)
    },
    splitValidThru() {
      this.card.validThruMonth = this.validThru.substring(0, 2);
      this.card.validThruYear = this.validThru.substring(2);
    },
    saveNewCard() {
      this.$emit('saveNewCard', this.card);
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