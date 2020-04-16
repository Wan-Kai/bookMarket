import Vue from "vue";
import Vuex from "vuex";
import login from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login
  },
  getters: {
    getSessionKey: () => login.state.sessionKey,
    getUsername: () => login.state.username,
    getLoginState: () => login.state.loginState,
    getIsLogin() {
      if (login.state.loginState === "guest") {
        return false;
      }
      return true;
    }
  }
});
