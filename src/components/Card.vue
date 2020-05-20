<template>
  <div class="card"
      v-bind:class="vendor">
      <img v-if="isActive"
        v-bind:src="require('@/assets/chip-dark.svg')"
        class="chip">
      <img v-else
        v-bind:src="require('@/assets/chip-light.svg')"
        class="chip">
      
      <img v-if="!(vendor == 'placeholder')"
        v-bind:src="require('@/assets/vendor-' + vendor + '.svg')"
        class="vendorIcon">

      <h3 class="cardNo">{{ cardNo }}</h3>
      <p class="name-heading">CARDHOLDER NAME</p>
      <p class="valid-thru-heading">VALID THRU</p>
      <h5 class="name">{{ name }}</h5>
      <h5 class="valid-thru">{{ validThruMonth }} / {{ validThruYear }} </h5>


  </div>
</template>

<script>
export default {
  name: "Card",
  components: {

  },
  props: {
      cardNo: String,
      name: String,
      validThruMonth: String,
      validThruYear: String,
      ccv: String,
      vendor: String,
      isActive: Boolean,
  },
  // computed: { style() { }}
};
</script>

<style scoped lang="scss">
div.card {
  width: 90vw;
  max-width: 300px;
  height: 55vw;
  max-height: 200px;
  border-radius: 0.5rem;
  border: lightgrey solid 0.1rem;
  // background: darkorange;

  display: grid;
  grid-template-columns: 70% 15% 15%;
  grid-template-rows: 20% 30% 25% 10% 15%;
  margin: 0 auto;
  padding: 2% 2%;
  font-family: 'Courier New', Courier, monospace;

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
    font-size: 1.6rem;
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
  }
  
}


.bitcoin {
  background: orange;
  color: black;
}
.ninja {
  background: black;
  color: white;
}
.blockchain {
  background: purple;
  color: white;
}
.evil {
  background: magenta;
  color: white;
}
.placeholder {
  background: lightgrey;
  color: black;
}
</style>