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
      files: []
    },
    comment: "",
    previousCommands: [],
    output: [],
    currentInstructions: undefined,
    tutorial: [
      ['You can create a directory with the command "mkdir directory_name". Try creating a directory with the name tutorial.','mkdir tutorial'],
      ['You can then navigate to that folder with the command "cd directory_name". Go into the folder "tutorial"', 'cd tutorial'],
      ['With the command "cd .." you can go up one level. Try it.', 'cd ..'],
      ['Now you can try to create a new file with "touch file_name". Create a file called index.html', 'touch index.html'],
      ['It\'s sometimes hard to remember what\'s in a directory. Try listing all the items in the directory with the command "ls".', 'ls']
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
    },
    evaluateAnswer(state, answer) {
      if (answer === state.tutorial[state.currentInstructions][1]) {
        if (state.currentInstructions === state.tutorial.length - 1) {
          state.currentInstructions = 0;
        } else {
          state.currentInstructions++; 
        }
        state.comment = '';
      } else { 
        state.comment = 'Wrong answer. Try again';
    }
    },
    startInstructions(state) {
      state.currentInstructions = 0; 
    }
  },
  actions: {
  },
});
