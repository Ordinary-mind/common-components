<template>
  <div id="app">
    <component
      v-for="(item, index) in list"
      :is="item.name"
      :key="index"
    ></component>
    <div style="width:100%;height:2px;background:black;"></div>
    <!-- <component
      v-for="(item, index) in customList"
      :is="item.name"
      :key="'customList' + index"
      :attrs="item.attrs" :ref="item.name"
    ></component> -->

    <button @click="clickFun" ref="btn">点我</button>
  </div>
</template>

<script>
import Vue from "vue";
import componentsObj from "../packages/index";
Vue.use(componentsObj);
export default {
  name: "app",
  data: function() {
    return {
      list: [],
      customList: [
        {
          name: "classA1",
          attrs: [
            {
              name: "aaa",
              condition: "==",
              value: "3",
              realValue: "",
              function: "console.log('条件成立')",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let arr = [];
    Object.keys(componentsObj).forEach((element) => {
      if (element != "install") {
        arr.push(componentsObj[element]);
      }
    });
    this.list = arr;
  },
  methods: {
    clickFun() {
      this.customList[0].attrs[0].realValue = "3";
      this.$refs["classA1"][0].hello = function (){
        console.log("I'm hello")
      }
      this.$refs["classA1"][0].hello();
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
