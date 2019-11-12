/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    parentDirectory: "",
    currentPath: "/", 
    currentLevel: 0,
    directoryTree: {
    },
    previousCommands: []
  },
  mutations: {
    updateHistory(state, command) {
      state.previousCommands.push(command);
    },
    createDirectory(state, name) {
      alert ('create a directory');
      let path = state.currentPath.slice(1).split("/").filter(x => x !== '');
      let cur = state.directoryTree;

      for (let dir of path) {
        cur = cur[dir];
      }
      cur[name] = {};
    },
    goToDirectory(state, directory) {
      if (state.currentPath !== '/') {
        state.currentPath = state.currentPath + '/' + directory;
      } else {
        state.currentPath = state.currentPath + directory;
      }
    },
    goUpOneLevel(state) {
      state.currentPath = state.currentPath.split('/').slice(0,-2).join('/');
      alert(state.currentPath);
    }
  },
  actions: {
  },
});
