<template>
  <div class="markbg">
    <el-progress :percentage="percentage" :width="100" class="percent" type="circle"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'my-progress',
  props: {
    percentage: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style scope>
.markbg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.percent {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
</style>
