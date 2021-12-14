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
          localStorage.clear("token");
          localStorage.clear("expiration");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
    tryAutoLogin({ commit }) {
      let token = localStorage.getItem("token");
      // console.log("Here is the token", token);
      if (!token) {
        return;
      }

      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      if (now >= expirationDate) {
        return;
      }

      axios
        .get("/contacts/me", {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        })
        .then((theResponse) => {
          commit("storeUserInApp", theResponse.data);
          commit("storeTokenInApp", token);
          this.dispatch("setLogoutTimer");
        })
        .catch(() => {
          myRoutes.replace("/");
        });
    },
    setLogoutTimer({ dispatch }) {
      let expirationDate = new Date(localStorage.getItem("expiration"));
      let now = new Date();
      let timeLeft = expirationDate - now;

      setTimeout(() => {
        dispatch("logout");
      }, timeLeft);
    },
  },
});
