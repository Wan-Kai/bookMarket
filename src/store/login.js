// initial state
const state = {
  username: "",
  loginState: "guest",
  sessionKey: "",
  avatar: ""
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  setLogin(state, login) {
    state.loginState = login;
  },
  setUsername(state, username) {
    state.username = username;
  },
  setSessionKey(state, sessionKey) {
    state.sessionKey = sessionKey;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
