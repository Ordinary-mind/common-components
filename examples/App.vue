<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <custom-text text="hello lqn"></custom-text>
    <custom-text text="真是个悲伤的故事"></custom-text>
    <custom-list :list="list1"></custom-list>
  </div>
</template>

<script>
import Vue from 'vue'
import myComponents from '../packages/index'
Vue.use(myComponents)
export default {
  name: 'app',
  data: function(){
    return {
    name: "lqn",
    list1: [{name: "aaaaaaaaaaa"},{name: "bbbbbbbbbbbbb"}]
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
