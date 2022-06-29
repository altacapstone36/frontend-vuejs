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
  fetchList(store) {
    axios.get('http://go-hospital-server.herokuapp.com/api/outpatient', {

    })
      
      .then((response) => {
        store.commit("setList", response.OutPatient);
        store.commit("setInfo", "");
        console.log("reponse", response)
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