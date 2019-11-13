<template>
  <div>
  <button v-on:click="reset">Restart</button>
  </div>
</template>

<script>
export default {
  name: 'resetButton',
  props: {
  },
  computed: {
  },
  methods: {
    reset: function() {
      this.$store.commit("startInstructions");
      this.$store.commit("clearOutput");
       }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin-bottom: 150px;
    color: #a70000;
    font-size: 18px;
    background: none;
    border: 2px solid #a70000;
    border-radius: 6px;
    transition: all 0.2s;
}
button:hover {
  cursor: pointer;
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: #a70000;
}
button:focus {
  outline: none;
}
</style>
