
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
    fetch_outpatient() {
        const token = this.$localStorage.get('token')
        axios 
         .get('http://localhost:8080/api/outpatient', {
           headers: { 'Authorization': 'Bearer ' + token ,
                       "Access-Control-Allow-Origin" : "*",
                       "Content-type": "Application/json",
                     }
         })
         .then(res => {
           this.items = res.data.data
           console.log(res.data.data)
           console.log(token)
           console.log(res.data)
           })
         .catch(err => {
            console.log(err)
          });

    }
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