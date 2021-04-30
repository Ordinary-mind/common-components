<template>
  <div>
    <h1
      id="hello"
      @mousedown="mousedown($event)"
      @mouseup="mouseup($event)"
    >
      组件A1
    </h1>
    <div style="width:100%;height:200px;border:solid;" id="fffff"></div>
  </div>
</template>
<script>
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
  },
  methods: {
    ondrag(ev) {
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    mousedown(ev) {
        console.log(ev)
        document.onmousemove = function (e) {
            console.log(e)
            // ev.target.style.position = "absolute";
            // ev.target.style.left = e.clientX - e.movementX + "px";
            // ev.target.style.top = e.clientY - e.movementY + "px";
        }
    },
    mouseup(ev){
    document.onmousemove = null;
        document.onmouseup = null;
    },
    drop_handler(ev) {
      ev.preventDefault();
      // Get the id of the target and add the moved element to the target's DOM
      var data = ev.dataTransfer.getData("Text");
      console.log(ev.dataTransfer);

      document
        .getElementById("fffff")
        .appendChild(document.getElementById("hello"));
    },
  },
};
</script>
