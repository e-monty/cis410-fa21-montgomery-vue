import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
    art: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },

    storeArt(state, art) {
      state.art = art;
    },
  },
  actions: {
    getArt({ commit }) {
      axios.get("/art").then((aResponse) => {
        console.log("response in /art", aResponse);
        commit("storeArt", aResponse.data);
      });
    },
  },
});
