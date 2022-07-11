import router from "@/router";
import { removeHeaderToken } from "@/utils/auth";
import axios from "axios";

const state = () => ({
  items: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.items = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
    // fetch_outpatient() {
    //     const token = this.$localStorage.get('token')
    //     axios 
    //      .get('http://localhost:8080/api/outpatient', {
    //       //  headers: { 'Authorization': 'Bearer ' + token ,
    //       //              "Access-Control-Allow-Origin" : "*",
    //       //              "Content-type": "Application/json",
    //       //            }
    //      })
    //      .then(res => {
    //        this.items = res.data.data
    //        console.log(res.data.data)
    //        console.log(token)
    //        console.log(res.data)
    //        })
    //      .catch(err => {
    //         console.log(err)
    //       });

    // },
    async fetch_outpatient({commit}){ 
      if(!localStorage.get('token')){
        return  
      }
      try{ 
        const response = await axios.get('outpatient')
          const setList = response.data.data
          commit('setList', setList)
          console.log(response.data.data)
      } catch (error){
          commit('reset_user') 
          const token = localStorage.getItem('token')
          router.push('login')
          console.log(token)
          removeHeaderToken()
          localStorage.removeItem('token')
          
          return error
      } 
    },

//   fetchList(store) {
//     const token = VueCookie.get('token')
//     axios.get('http://localhost:8080/api/outpatient', {      
//       headers: { 'Authorization': 'Bearer ' + token, 
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET'}
//     })
//       console.log(token)
//       .then((response) => {
//         store.commit("setList", response.data.data);
//         store.commit("setInfo", "");
//         console.log("response", response)

//       })
//       .catch((error) => {
//         store.commit("setInfo", error);
//       });
//   },

};

export default {
  state,
  mutations,
  actions,
}