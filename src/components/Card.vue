<template>
  <div class="card"
      v-bind:class="vendor">
      <img v-if="isActive"
        v-bind:src="require('@/assets/chip-dark.svg')">
      <img v-else
        v-bind:src="require('@/assets/chip-light.svg')">
      
      <img v-bind:src="require('@/assets/vendor-' + vendor + '.svg')">

      <h3>{{ cardNo }}</h3>
      <p>CARDHOLDER NAME</p>
      <p>VALID THRU</p><p>{{ vendor }}</p>
      <h5>{{ name }}</h5>
      <h5>{{ validThruMonth }} / {{ validThruYear }} </h5>


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
  // computed: {
  //   style() {

  //   }
  // }
};
</script>

<style scoped lang="scss">
div .card {
  width: 90vw;
  height: 55vw;
  border-radius: 0.5rem;
  border: lightgrey solid 0.1rem;
  // background: darkorange;

  display: grid;

}
p {
    font-size: 0.5rem;
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
</style>