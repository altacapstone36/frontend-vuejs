import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import defaultLayout from './layouts/defaultlayout.vue'
import blankLayout from './layouts/blank.vue'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import store from './store'
=======
import axios from 'axios'
import store from './store'
import { setHeaderToken } from './utils/auth'
>>>>>>> Stashed changes
=======
import axios from 'axios'
import store from './store'
import { setHeaderToken } from './utils/auth'
>>>>>>> Stashed changes

axios.defaults.baseURL = 'https://go-hospital-server.herokuapp.com/api/'
Vue.component('default-layout', defaultLayout)
Vue.component('blank-layout', blankLayout)


Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
=======
=======
>>>>>>> Stashed changes
const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

store.dispatch('get_user', token)
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
<<<<<<< Updated upstream
})
>>>>>>> Stashed changes
=======
})
>>>>>>> Stashed changes
