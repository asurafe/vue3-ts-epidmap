<template>
  <div class="box">
    <div class="box-left"></div>
    <div class="box-center"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup>
import { useCounterStore } from "./stores/counter.ts";
const store = useCounterStore();
store.getList();
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
  &-left {
    width: 400px;
    background: red;
  }
  &-center {
    flex: 1;
  }
  &-right {
    width: 400px;
    background: green;
  }
}
</style>
