import Vue from "vue";
import Vuex from "vuex";
import login from "./login";
import util from "./util";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    util
  },
  getters: {
    getSessionKey: () => login.state.sessionKey,
    getUsername: () => login.state.username,
    getAvatar: () => login.state.avatar,
    getLoginState: () => login.state.loginState,
    getBaseUrl: () => util.state.baseUrl,
    getIsLogin() {
      if (login.state.loginState === "guest") {
        return false;
      }
      return true;
    }
  }
});
