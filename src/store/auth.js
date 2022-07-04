import router from "@/router"
import { removeHeaderToken } from "@/utils/auth"
import axios from "axios"
import VueCookie from "vue-cookie"
export default{
    state: {
        user: null,
        isLoggedIn: false,  
    },
    mutations: {
        set_user (state, data) {
            state.user = data
            state.isLoggedIn = true
          }, 
          reset_user (state) {
            state.user = null
            state.isLoggedIn = false
          } 
    },
    getters:{
        isLoggedIn (state){
            return state.isLoggedIn
          },
          user (state) {
            return state.user
          } 
    },
    actions: { 
        // login({ dispatch, commit }, data) {
        //     return new Promise((resolve, reject) => { 
        //       axios.post('login', data)
        //        .then(response => {
        //          const token = response.data.jwt.access_token
        //          localStorage.setItem = token
        //          VueCookie.set = token
        //          setHeaderToken(token) 
        //          dispatch('get_user')
        //          console.log(setHeaderToken(token))
        //          resolve(response)
        //          console.log(response.data.jwt.access_token)
        //        })
        //        .catch(err => {
        //          commit('reset_user')  
        //          localStorage.removeItem('token')
        //          reject(err)
        //       })
        //     })
        //   },
          async get_user({commit}){

            try{ 
              const response = await axios.get('http://localhost:8080/api/user')
                const set_user = response.data.data
                commit('set_user', set_user)
                console.log(response.data.data)
            } catch (error){
                commit('reset_user') 
                removeHeaderToken()
                localStorage.removeItem('token')
                const token = localStorage.getItem('token')
                router.push('login')
                console.log(token)
                // if(!token){
                //   alert('error no token')
                //   removeHeaderToken()
                //   
                // }
                return error
            } 
          },
          logout({ commit }) {
            return new Promise((resolve) => {
             commit('reset_user')
             localStorage.removeItem('token')
             VueCookie.delete('token')
             removeHeaderToken()
             resolve()
            })
           },
    } 
  }
