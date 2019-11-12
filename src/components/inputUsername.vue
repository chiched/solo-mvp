<template>
  <div>
  <input v-on:keyup.enter="submit($event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'inputUsername',
  props: {
  },
  computed: {
  },
  methods: {
    submit: function(value) {
      this.$store.commit("setUsername", value);
       }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

