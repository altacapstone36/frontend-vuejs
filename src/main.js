import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import defaultLayout from './layouts/defaultlayout.vue'
import blankLayout from './layouts/blank.vue'

Vue.component('default-layout', defaultLayout)
Vue.component('blank-layout', blankLayout)


Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
