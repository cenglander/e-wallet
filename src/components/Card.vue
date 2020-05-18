<template>
  <div class="card">
      <h3>{{ cardNo }}</h3>
      <p>CARDHOLDER NAME</p>
      <p>VALID THRU</p>
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

  }
};
</script>

<style scoped lang="scss">
div .card {
  width: 90vw;
  height: 50vw;
  border-radius: 0.5rem;
  border: lightgrey solid 0.1rem;
  background: darkorange;

  display: grid;

}
p {
    font-size: 0.5rem;
}
</style>