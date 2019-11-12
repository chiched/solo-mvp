<template>
  <div>
  <input v-on:keyup.enter="submit($event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'inputBox',
  props: {
  },
  computed: {
  },
  methods: {
    submit: function(value) {
      this.$store.commit("updateHistory", value);
      this.$store.commit("updateOutput", value);
       let command = value.split(' ');
       
       switch (command[0]) {
        case 'cd':
            if (command[1] === '..') {
              this.$store.commit("goUpOneLevel");
            } else {
              this.$store.commit("goToDirectory", command[1]);
            }
            break;
        case 'ls':
            this.$store.commit("displayList");
            break;
        case 'open':
            alert('open file');
            break;
        case 'mkdir':
            this.$store.commit("createDirectory", command[1]);
            break;
        case 'touch':
            this.$store.commit("createFile", command[1]);
            break;
        case 'clear':
            this.$store.commit("clearOutput");
            break;
        case 'rmdir':
            alert('remove directory');
            break;
        default:
            this.$store.commit("updateOutput", value + ": command not found");
            
       }
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  background-color: #242424 ; 
  width: 100%; 
  color: #ececec; 
  padding: 0; 
  border: none;
  font-size: 15px;
    width: 80%;
    float: left;
  }
input:focus {
  outline: none;
}
</style>

