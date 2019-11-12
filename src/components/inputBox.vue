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
       let command = value.split(' ');
       
       switch (command[0]) {
         case 'cd':
            alert('go to directory'); 
            if (command[1] === '..') {
              this.$store.commit("goUpOneLevel");
            } else {
            this.$store.commit("goToDirectory", command[1]);
            }
            break;
        case 'ls':
            alert('list all files in directory');
            break;
        case 'open':
            alert('open file');
            break;
        case 'mkdir':
            this.$store.commit("createDirectory", command[1]);
            break;
        case 'clear':
            alert('clear the console');
            break;
        case 'rmdir':
            alert('remove directory');
            break;
        default:
            alert('command unknown');
       }
    }
  }
}













</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
