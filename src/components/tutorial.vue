<template>
  <div class="tutorial">
    {{ instructions }}
  </div>
</template>

<script>
export default {
  name: 'tutorial',
  props: {
  },
  computed: {
    instructions() {
      return this.$store.state.currentInstructions;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tutorial {
    position: absolute;
    bottom: 27px;
}
</style>
