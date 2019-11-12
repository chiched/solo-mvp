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
    directoryTree: {files: []
    },
    previousCommands: [],
    output: [],
    currentInstructions: "",
    tutorial: [
      ['You can create directory with the command "mkdir directory_name". Try creating a directory with the name tutorial.','mkdir tutorial'],
      ['You can then navigate to that folder with the command "cd directory_name". Go into the folder "tutorial"', 'cd tutorial']
    ]
  },
  mutations: {
    updateHistory(state, command) {
      state.previousCommands.push(command);
    },
    updateOutput(state, output) {
      state.output.push(output);
    },
    createDirectory(state, name) {
      let path = state.currentPath.slice(1).split("/").filter(x => x !== '');
      let cur = state.directoryTree;

      for (let dir of path) {
        cur = cur[dir];
      }
      cur[name] = {};
      cur[name].files = [];
    },
    createFile(state, name) {
      let path = state.currentPath.slice(1).split("/").filter(x => x !== '');
      let cur = state.directoryTree;

      for (let dir of path) {
        cur = cur[dir];
      }
      cur.files.push(name);
    },
    goToDirectory(state, directory) {
      if (state.currentPath !== '/') {
        state.currentPath = state.currentPath + '/' + directory;
      } else {
        state.currentPath = state.currentPath + directory;
      }
    },
    goUpOneLevel(state) {
      state.currentPath = state.currentPath.split('/').slice(0,-1).join('/');
      if (state.currentPath === '') {
        state.currentPath = '/';
      }
      alert(state.currentPath);
    },
    displayList(state) {
      let path = state.currentPath.slice(1).split("/").filter(x => x !== '');
      let cur = state.directoryTree;
      let list = [];
      for (let dir of path) {
        cur = cur[dir];
      }
      for (let item in cur) {
        if(Array.isArray(cur[item])) {
          list.push(cur[item].join('       '));
        } else {
          list.push(item);
        }
      }
      state.output.push(list.join('         '));
    },
    clearOutput(state) {
      state.output = [];
    },
    setUsername(state, name) {
      state.username = name;
    }
  },
  actions: {
  },
});
