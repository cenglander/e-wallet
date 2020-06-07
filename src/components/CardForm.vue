<template>
  <div class="card-form">
    <form id="add"
          @submit="checkForm">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors"
            :key="index">
            {{ error }}</li>
        </ul>
      </p>
      <label class="cardNoTitle">CARD NUMBER</label>
      <input 
        class="cardNo"
        id="cardNo"
        v-model="card.cardNo" 
        @keyup="displayNoOnCard"
        :maxlength="16">

      <label class="nameTitle">CARDHOLDER NAME</label>
      <input 
        class="name"
        id="name"
        v-model="card.name"
        @keyup="displayNameOnCard"
        placeholder="FIRSTNAME LASTNAME"
        :maxlength="20">
      
      <label class="validTitle">VALID THRU</label>
      <input 
        class="valid"
        id="valid"
        v-model="validThru" 
        @keyup="displayValidThruOncard(); splitValidThru()"
        :maxlength="4">

      <label class="ccvTitle">CCV</label>
      <input 
        id="ccv"
        class="ccv"
        v-model="card.ccv"
        :maxlength="3">

      <label class="vendorTitle">VENDOR</label>
      <select 
        id="vendor"
        class="vendor"
        v-model="card.vendor"
        @change="displayVendorOnCard">
        <option v-for="vendor in vendorList"
          :key="vendor.value"
          :value="vendor.value">
          {{ vendor.text }}
        </option>
      </select>
      <router-link to="/">
        <input class="add-card-btn"
          @click="saveNewCard"
          type="submit" value="ADD CARD">
      </router-link>
    </form>

   
    <!-- <router-link to="/">
      <button class="add-card-btn"
        @click="saveNewCard">ADD CARD</button>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  components: {
  },
  el: '#add',
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
    validThru: "",
    errors: [],
  }),
  methods: {
    checkForm: function (e) {
      if (this.card.cardNo && this.card.name && this.validThru && this.card.ccv && this.card.vendor) {
        return true
      } 
      this.errors = []
      if (!this.card.cardNo) {
        this.errors.push("Card number required.")
      }
      if (!this.card.name) {
        this.errors.push("Name required.")
      }
      if (!this.card.validThru) {
        this.errors.push("Valid thru (MM/YY) required.")
      }
      if (!this.card.ccv) {
        this.errors.push("CCV required.")
      }
      if (!this.card.vendor) {
        this.errors.push("Vendor required.")
      }
      e.preventDefault()
    },
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
  div.card-form {
    width: 21rem;
    margin: 2rem auto;
    form {
      display: grid;
      grid-template-rows: 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr;
      grid-template-columns: 50% 50%;
      grid-template-areas: 
        "cardNoTitle cardNoTitle"
        "cardNo cardNo"
        "nameTitle nameTitle"
        "name name"
        "validTitle ccvTitle"
        "valid ccv"
        "vendorTitle vendorTitle"
        "vendor vendor";     
    }
    .cardNoTitle {
      grid-area: cardNoTitle;
    }
    .cardNo {
      grid-area: cardNo;
    }
    .nameTitle {
      grid-area: nameTitle;
    }
    .name {
      grid-area: name;
    }
    .validTitle {
      grid-area: validTitle;
      width: 10.5rem;
    }
    .valid {
      grid-area: valid;
      width: 10.3rem;
      margin-right: 0.2rem;
    }
    .ccvTitle {
      grid-area: ccvTitle;
      width: 10rem;
    }
    .ccv {
      grid-area: ccv;
      width: 10.3rem;
      margin-left: 0.2rem;
    }
    .vendorTitle {
      grid-area: vendorTitle;
    }
    .vendor {
      grid-area: vendor;
    } 
    form {
      text-align: left;
      margin-bottom: 2rem;
    }
    form label {
      font-size: 0.8rem;
      font-weight: 600;
      margin: 1rem 0 0 0;
    }
    form input, select {
      padding: 1rem 0.7rem;
      border-radius: 0.5rem;
      border: solid black 0.08rem;
      font-size: 1rem;
      font-weight: 800;
      box-sizing: border-box;
    }
    form label, input, select, option {
      font-family: 'Courier New', Courier, monospace;
      width: 21rem;
    }
    button.add-card-btn {
      background: #000;
      color: white;
      border: #000;
    }
  }
</style>