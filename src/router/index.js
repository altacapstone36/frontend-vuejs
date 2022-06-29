import landingPage from '@/views/landingpage.vue'
import loginPage from '@/views/login.vue'
import registerPage from '@/views/register.vue'
import homePage from '@/views/home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import  notfound  from '@/views/404.vue'
import changePassword from '@/views/changepassword.vue'
import scheduleList from '@/views/schedulelist.vue'
import adddoctorSchedule from '@/views/adddoctorschedule.vue'


Vue.use(VueRouter)

const routes = [
{
    path: '/landingpage',
    name: 'landingPage',
    meta: {layout: 'blank'},
    component: landingPage
},
{
    path: '/home',
    name: 'homePage',
    component: homePage
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
{
    path: '*',
    name: 'notfound',
    meta: {layout: 'blank'},
    component: notfound
},
{
    path: '/changepassword',
    name: 'changePassword',
    component: changePassword
},
{
    path: '/schedulelist',
    name: 'scheduleList',
    component: scheduleList
},
{
    path: '/addschedule',
    name: 'adddoctorSchedule',
    component: adddoctorSchedule
},
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
