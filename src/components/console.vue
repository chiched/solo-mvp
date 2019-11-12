<template>
  <div>
      {{ directory }}
      <inputBox/>
  </div>
</template>

<script>
import InputBox from './inputBox.vue'
export default {
  name: 'Console',
  props: {
  },
  components: {
  InputBox
  },
  computed: {
    directory() {
      return this.$store.state.currentPath;
    }
  },
    updated() {
    // Fired every second, should always be true
    alert('updated');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
