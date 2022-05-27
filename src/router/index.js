import landingPage from '@/views/landingpage.vue'
import loginPage from '@/views/login.vue'
import registerPage from '@/views/register.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
    path: '/landingpage',
    name: 'landingPage',
    component: landingPage
},

{
    path: '/login',
    name: 'loginPage',
    component: loginPage
},
{
    path: '/register',
    name: 'registerPage',
    component: registerPage
},

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
