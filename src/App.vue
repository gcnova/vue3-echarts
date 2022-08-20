
<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const zoom = ref(null);
window.addEventListener("optimizedResize", function () {
  let app = document.getElementById("app");
  let scale = document.documentElement.clientWidth / 1920;
  app.style.cssText = "zoom:" + scale + "";
});

const scale = () => {
  let app = document.getElementById("app");
  zoom.value = document.documentElement.clientWidth / 1920;
  app.style.cssText = "zoom:" + zoom.value + "";

  // 防抖
  (function () {
    let throttle = function (type: any, name: any, obj?: any) {
      obj = obj || window;
      let running = false;
      let func = function () {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
  })();
};

onMounted(() => {
  scale();
});
</script>

<style scoped>
.root{
  min-height: 1080px;
  min-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}
</style>
