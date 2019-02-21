import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    actionName({ commit }, value) {
      commit("mutationName", value);
    }
  },
  mutations: {
    mutationName(state, value) {
      state.value = value;
    }
  },
  state: {
    value: "Yep"
  }
});
