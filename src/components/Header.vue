<template>
  <div class="header">
    <div class="font">
      <p>xxxx大数据面板</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header {
  margin: 0 auto;
  width: 1806px;
  height: 112px;
  background-image: url(@/assets/images/header.png);
  .font {
    background: linear-gradient(180deg, #2079f5 25%, #27ffff 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    p {
      font-size: 38px;
      font-weight: 600;
      line-height: 112px;
      text-align: center;
      color: transparent;
    }
  }
}
</style>
