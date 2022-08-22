<!-- Home -->
<template>
  <div class="main">
    <div class="top">
      <div class="p1">
        <div class="list">
          <div>姓名</div>
          <div>部门</div>
          <div>时间</div>
        </div>
        <vue3-seamless-scroll
            :list="attendData"
            :step="1"
            :singleHeight="30"
            hover
            class="temper-scroll"
          >
            <div
              class="scroll-item"
              v-for="(item, index) in attendData"
              :key="index"
            >
              <span>{{ item.name }}</span>
              <span>{{ item.depart }}</span>
              <span>{{ item.time }}</span>
            </div>
          </vue3-seamless-scroll>
      </div>
      <div class="p2">
        <div class="c1"></div>
        <div class="c2"></div>
        <!-- 饼图 -->
        <div class="c3"></div>
        <div class="c4">
          <div class="dec">
            <div class="number">
              <p class="title">公司应到人数</p>
              <p class="numb">500</p>
            </div>
            <div class="number">
              <p class="title">部门应到人数</p>
              <p class="numb">500</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="p3"></div>
        <div class="p4"></div>
      </div>
    </div>
    <div class="bototm">
      <div class="b1">
        <div class="dec">500</div>
        <div class="bg"></div>
        <div class="tag">正常人数</div>
      </div>
      <div class="b2">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="dec">500</div>
        <div class="tag">缺勤</div>
      </div>
      <div class="b3">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="dec">500</div>
        <div class="tag">迟到</div>
      </div>
      <div class="b4">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="dec">500</div>
        <div class="tag">已出勤人数</div>
      </div>
      <div class="b5">
        <div class="bg"></div>
        <div class="dec">500</div>
        <div class="tag">缺勤比率</div>
      </div>
      <div class="b6">
        <div class="bg"></div>
        <div class="dec">500</div>
        <div class="tag">迟到比率</div>
      </div>
      <div class="b7">
        <div class="bg"></div>
        <div class="dec">500</div>
        <div class="tag">早退比率</div>
      </div>
      <div class="b8">
        <div class="dec">100%</div>
        <div class="bg"></div>
        <div class="tag">出勤比率</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

// 模拟数据
let attendData = ref([
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "人力部", time: "2022.08.30" },
  { name: "王五", depart: "研发部", time: "2022.08.30" },
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "行政部", time: "2022.08.30" },
  { name: "王五", depart: "人力部", time: "2022.08.30" },
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "人力部", time: "2022.08.30" },
  { name: "王五", depart: "研发部", time: "2022.08.30" },
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "行政部", time: "2022.08.30" },
  { name: "王五", depart: "人力部", time: "2022.08.30" },
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "人力部", time: "2022.08.30" },
  { name: "王五", depart: "研发部", time: "2022.08.30" },
  { name: "张三", depart: "研发部", time: "2022.08.30" },
  { name: "李四", depart: "行政部", time: "2022.08.30" },
  { name: "王五", depart: "人力部", time: "2022.08.30" },
]);
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>