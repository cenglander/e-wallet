<template>
  <div id="app">
    
    <router-link to="/">Home</router-link>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #000;
  // box-sizing: border-box;

  button {
    font-weight: 1000;
    font-size: 1rem;
    padding: 2vh;
    border-radius: 0.5rem;
    width: 320px;
  }

  h3 {
    padding: 0;
    margin: 0;
  }
  p, h5 {
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 0.7rem;
  }
  h5 {
    font-size: 1rem;
  }

}


</style>
