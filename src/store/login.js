// initial state
const state = {
  username: "",
  loginState: "guest",
  sessionKey: ""
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  setLogin(state, login) {
    state.loginState = login;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
