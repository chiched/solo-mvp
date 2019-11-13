<template>
  <div id="console-container">
    <h3>The terminal</h3>
      <Output/>
      <span class="path">{{ directory }} {{ username }}$</span>
      <inputBox/>
      <tutorial />
      <comment />
  </div>
</template>

<script>
import InputBox from './inputBox.vue'
import Output from './output.vue'
import Tutorial from './tutorial.vue'
import Comment from './comment.vue'

export default {
  name: 'Console',
  props: {
  },
  components: {
  InputBox,
  Output,
  Tutorial, 
  Comment
  },
  computed: {
    directory() {
      return this.$store.state.currentPath;
    },
    username() {
      return this.$store.state.username;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#console-container {
    background-color: #242424;
    height: 350px;
    color: #ececec;
    font-size: 15px;
    padding: 20px 30px;
    border-radius: 25px;
    border: 2px #ffffff solid;
    box-shadow: 0px 0px 5px 0px #000000;
    text-align: left;
    position: relative;
}
.path {
    float: left;
    margin-right: 20px;
}
h3 {
    margin: 5px 0px 0px 0px;
    font-size: 22px;
}
</style>
