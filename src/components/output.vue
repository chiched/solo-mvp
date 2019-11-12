<template>
  <div>
    <ul>
       <li v-for="(item, index) in output" :key="index">
    {{ item }}
  </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'output',
  props: {
  },
  computed: {
    output() {
      return this.$store.state.output;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-left: 0px;
}
li {
  list-style: none;
  text-align: left;
}
</style>
