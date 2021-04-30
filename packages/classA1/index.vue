<template>
  <div style="user-select:none;">
    <div style="display:inline-block;position:absolute;border:solid 1px red;" :style="{'left':left,'top':top}">
        <span style="position:absolute;width:10px;height:10px;background:red;top:-5px;left:-5px;"></span>
        <span style="position:absolute;width:10px;height:10px;background:red;top:-5px;right:-5px;"></span>
        <span style="position:absolute;width:10px;height:10px;background:red;bottom:-5px;left:-5px;"></span>
        <span style="position:absolute;width:10px;height:10px;background:red;bottom:-5px;right:-5px;"></span>
        <span style="position:absolute;width:2px;height:35px;background: black;left:50%;top:-35px;"></span>
        <h1
      id="hello" style="margin:0;display:inline-block;"
      @mousedown="mousedown($event)"
    >
      组件A1
    </h1>
    </div>
    <div style="width:100%;height:200px;border:solid;" id="fffff"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "classA1",
  props: ["index", "js", "attrs"],
  watch: {
    attrs: {
      handler: function(v1, v2) {
        if (v1) {
          v1.forEach((element) => {
            try {
              if (
                eval(
                  `'${element.value}' ${element.condition} '${element.realValue}'`
                )
              ) {
                eval(element.function);
                console.info(
                  `'${element.value}' ${element.condition} '${element.realValue}' 条件成立`
                );
              }
            } catch (err) {
              console.error(err);
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
    moveFlag(e){
    },
    moveCoordinate(e){
        if(this.$store.state.moveFlag){
            this.left = e.split(",")[0] - this.offsetX + "px";
            this.top = e.split(",")[1] - this.offsetY + "px";
        }
    }
  },
  computed:{
      ...mapState({
          moveFlag: state => state.moveFlag,
          moveCoordinate: state => state.moveCoordinate
      })
  },
  data(){
      return {
          left: 0,
          top: 0,
          moveObj: null
      }
  },
  methods: {
    mousedown(ev) {
        this.$store.commit("moveFlag", true);
        this.offsetX = ev.offsetX;
        this.offsetY = ev.offsetY;
    }
  },
};
</script>
