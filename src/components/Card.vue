<template>
  <div>
    <!-- v-if="isActive" -->
    <div class="card" v-bind:class="vendor">
      <img v-if="isActive" v-bind:src="require('@/assets/chip-dark.svg')" class="chip" />
      <img v-else v-bind:src="require('@/assets/chip-light.svg')" class="chip" />

      <img
        v-if="!(vendor == 'placeholder')"
        v-bind:src="require('@/assets/vendor-' + vendor + '.svg')"
        class="vendorIcon"
      />

      <h3 class="cardNo">{{ addSpacesInCardNo(cardNo) }}</h3>
      <p class="name-heading">CARDHOLDER NAME</p>
      <p class="valid-thru-heading">VALID THRU</p>
      <h5 class="name">{{ name.toUpperCase() }}</h5>
      <h5 class="valid-thru">{{ validThruMonth }}/{{ validThruYear }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    // card: Object,
    cardNo: String,
    name: String,
    validThruMonth: String,
    validThruYear: String,
    ccv: String,
    vendor: String,
    isActive: Boolean
  },
  computed: {
  },
  methods: {
    addSpacesInCardNo(cardNo) {
      let numbers = cardNo.split('');
      let cardNoSpaces = "";
      let char = "";
      for(let i = 0; i < numbers.length; i++) {
        if(i % 4 === 0) {
          char = numbers[i];
          cardNoSpaces += " " + char;
        }
        else {
          cardNoSpaces += numbers[i];
        }
      }
      return cardNoSpaces;
    }
  },
};
</script>

<style scoped lang="scss">
div.card {
  width: 21rem;
  min-height: 13.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 70% 15% 15%;
  grid-template-rows: 20% 30% 25% 10% 15%;
  margin: 0 auto;
  padding: 0.8rem;
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;

  h3, h5, p {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 0.8rem;
  }
  img.chip {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  img.vendorIcon {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: flex;
    justify-self: flex-end;
  }
  h3.cardNo {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    font-size: 1.7rem;
    font-weight: 700;
  }
  p.name-heading {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    text-align: left;
  }
  h5.name {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;
  }
  p.valid-thru-heading {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    text-align: right;
  }
  h5.valid-thru {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
.bitcoin {
  background: #f9b243;
  color: black;
}
.ninja {
  background: #3a3835;
  color: white;
}
.blockchain {
  background: #7a4bda;
  color: white;
}
.evil {
  background: #df2f4f;
  color: white;
}
.placeholder {
  background: lightgrey;
  color: black;
}
</style>