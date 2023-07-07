<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<template>
  <div class="box">
    <el-button type="primary" size="small" :icon="Edit">123</el-button>
    <svg-icon name="moon" color="green" width="100px" height="100px"></svg-icon>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100px;
}
</style>
