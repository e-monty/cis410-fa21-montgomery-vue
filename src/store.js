import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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

    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getArt({ commit }) {
      axios.get("/art").then((aResponse) => {
        console.log("response in /art", aResponse);
        commit("storeArt", aResponse.data);
      });
    },

    logout({ commit, state }) {
      axios
        .post("/contacts/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
