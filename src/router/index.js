import landingPage from '@/views/landingpage.vue'
import loginPage from '@/views/login.vue'
import registerPage from '@/views/register.vue'
import homePage from '@/views/home.vue'
import addPatient from'@/views/addpatient.vue'
import editPatient from'@/views/editpatient.vue'
import patientData from'@/views/patientdata.vue'
import forgotPassword from'@/views/lupapassword.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import  notfound  from '@/views/404.vue'
import outpatientAdd from '@/views/outpatientadd.vue'
import outpatientData from '@/views/outpatientdata.vue'
import outpatientList from '@/views/outpatientlist.vue'
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
    meta: {layout: 'blank'},
    component: loginPage
},
{
    path: '/register',
    name: 'registerPage',
    meta: {layout: 'blank'},
    component: registerPage
},
{
    path: '*',
    name: 'notfound',
    meta: {layout: 'blank'},
    component: notfound
},

{
    path: '/addoutpatient',
    name: 'outpatientAdd',
    component: outpatientAdd
},

{
    path: '/outpatientreport',
    name: 'outpatientReport',
    component: outpatientData
},

{
    path: '/outpatientlist',
    name: 'outpatientList',
    component: outpatientList
},

{
    path: '/changepassword',
    name: 'changePassword',
    component: changePassword
},

{
    path: '/addpatient',
    name: 'addPatient',
    component: addPatient
},
{
    path: '/editpatient',
    name: 'editPatient',
    component: editPatient
},
{
    path: '/patientdata',
    name: 'patientData',
    component: patientData
},
{
    path: '/lupapassword',
    name: 'forgotPassword',
    meta: {layout: 'blank'},
    component: forgotPassword
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
