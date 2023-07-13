<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagenation from '@/components/Pagenation/index.vue'
import Login from '@/views/login/index.vue'
</script>

<template>
  <div class="box">
    <router-view />
    <!-- <el-button type="primary" size="small" :icon="Edit">123</el-button>
    <svg-icon name="moon" color="green" width="100px" height="100px"></svg-icon>
    <Pagenation /> -->
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
