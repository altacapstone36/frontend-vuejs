<template>
  <div id="app">
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
@import url("https://use.typekit.net/uhs5dlf.css");

div {
font-family: 'nunito', sans-serif;
}

</style>
