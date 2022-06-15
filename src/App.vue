<template>
<div class="noscroll">
    <component :is="layout">
      <router-view></router-view>
    </component>
</div>
</template>

<script>
//import defaultlayoutVue from './layout/defaultlayout.vue'
//import defaultLayout from './layout/defaultlayout.vue'
const defaultLayout = 'default'
export default {
  name: 'App',
  computed: {
    layout(){
      return(this.$route.meta.layout || defaultLayout ) + '-layout'
    }
  },
  components: {
  //  defaultLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.noscroll {
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}

</style>
