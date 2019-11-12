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
        
        alert(command);
    }
  }
}
















</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
