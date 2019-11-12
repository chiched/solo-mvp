<template>
  <div id="app">
    <h1>Learn the terminal</h1>
    <ul class="intro">
      <li><span>cd</span>: this command is for navigating into a directory</li>
      <li><span>cd..</span>: this command is for ...</li>
      <li><span>ls</span>: this command is for ...</li>
      <li><span>mkdir</span>: this command is for ...</li>
      <li><span>touch</span>: this command is for ...</li>
      <li><span>clear</span>: this command is for ...</li>
    </ul>


    <div class="username-container"><span>What's your name:</span> <inputUsername /></div>
    <console/>
  </div>
</template>

<script>
import Console from './components/console.vue'
import inputUsername from './components/inputUsername.vue'

export default {
  name: 'app',
  components: {
    Console,
    inputUsername
  }
}
</script>

<style>
body {
    background-color: #e8e8e8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.username-container {
    height: 40px;
    padding: 0 30px;
}
.username-container span {
    float: left;
    margin-right: 10px;
}
.username-container input {
    float: left;
}
.intro {
  margin: 50px 0;
}
.intro li {
    list-style: none;
    text-align: left;
    height: 30px;
}
.intro li span {
    font-weight: bold;
    color: #a70000;
    font-size: 18px;
    width: 70px;
    display: block;
    float: left;
}
</style>
