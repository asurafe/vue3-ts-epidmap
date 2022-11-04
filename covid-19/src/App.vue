<template>
  <div :style="{ background: `url(${bg})` }" class="box">
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup lang="ts">
import bg from "./assets/ganyu.jpg";
import { useCounterStore } from "./stores/counter";
import { onMounted } from "vue";
import * as echarts from "echarts";
import option from "./utils/index";
import "./assets/china.js";
import { geoCoordMap } from "./assets/geoMap";

const store = useCounterStore();

onMounted(async () => {
  await store.getList();
  const city = store.list.diseaseh5Shelf.areaTree[0].children;
  const data = city.map((item) => {
    return {
      name: item.name,
      value: geoCoordMap[item.name].concat(item.total.nowConfirm),
    };
  });
  const charts = echarts.init(document.querySelector("#china") as HTMLElement);
  charts.setOption(option(data));
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
.box {
  height: 100%;
  display: flex;
  background-size: 100vw !important;
  &-left {
    width: 300px;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 300px;
  }
}
</style>
