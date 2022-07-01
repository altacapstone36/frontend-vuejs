<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";


import pokemon from "./pokemon.store";


Vue.use(Vuex);

// const persistedDataState = createPersistedState({
//   paths: ["demo", "auth.token"],
// });

export default new Vuex.Store({
//   plugins: [persistedDataState],
  modules: {
    pokemon: {
      namespaced: true,
      ...pokemon,
    },
    
  },
});
=======
=======
>>>>>>> Stashed changes
import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
