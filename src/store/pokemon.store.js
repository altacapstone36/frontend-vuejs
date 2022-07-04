
import axios from "axios";
import VueCookie from "vue-cookie";

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
  fetchList(store) {
    const token = VueCookie.get('token')
    axios.get('http://localhost:8080/api/outpatient', {      
      headers: { 'Authorization': 'Bearer ' + token, 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'}
    })
      console.log(token)
      .then((response) => {
        store.commit("setList", response.OutPatient.data);
        store.commit("setInfo", "");
        console.log("response", response)

      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },

};

export default {
  state,
  mutations,
  actions,
}