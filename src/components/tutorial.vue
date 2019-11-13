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
      if (this.$store.state.currentInstructions !== undefined) {
      return this.$store.state.tutorial[this.$store.state.currentInstructions][0];
      } else return '';
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tutorial {
    position: absolute;
    bottom: 27px;
}
</style>
