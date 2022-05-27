<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <defaultLayout/>
  </div>
</template>

<script>
import defaultLayout from './layout/defaultlayout.vue'

export default {
  name: 'App',
  components: {
    defaultLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
