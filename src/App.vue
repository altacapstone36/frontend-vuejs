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
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap");

div {
font-family: 'Nunito', sans-serif;
;
}

</style>
