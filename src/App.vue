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
  color: #2c3e50;

  button {
    font-weight: 1000;
    font-size: 1rem;
  }
}


</style>
