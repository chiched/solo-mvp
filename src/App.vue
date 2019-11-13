<template>
  <div id="app">
    <h1>Learn the terminal</h1>
    <ul class="intro">
      <li><span>cd [folder]</span>: Change directory</li>
      <li><span>cd ..</span>: Move up to the parent directory</li>
      <li><span>ls</span>: Display the name of files and subdirectories in the directory</li>
      <li><span>mkdir &lt;dir&gt;</span>: Create new folder named &lt;dir&gt;</li>
      <li><span>touch &lt;file&gt;</span>: Create a new file named &lt;file&gt;</li>
      <li><span>clear</span>: Clear the screen</li>
    </ul>


    <div class="username-container"><span>Let's start the tutorial! What's your name:</span> <inputUsername /></div>
    <console/>
    <resetButton />
  </div>
</template>

<script>
import Console from './components/console.vue'
import inputUsername from './components/inputUsername.vue'
import resetButton from './components/resetButton.vue'

export default {
  name: 'app',
  components: {
    Console,
    inputUsername,
    resetButton
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
    width: 130px;
    display: block;
    float: left;
}
</style>
