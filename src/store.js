import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    parentDirectory: "/home",
    currentDirectory: "/path/test", 
    currentFiles: [],
    previousCommands: []
  },
  mutations: {
    updateHistory(state, command) {
      state.previousCommands.push(command);
    }
  },
  actions: {
  },
});
