<template>
    <div class="login-box">
        <h1>登录页面</h1>
    </div>
</template>
<script setup lang='ts'>
import request from '@/utils/request';
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

// 当组件挂载完毕发起请求
onMounted(() => {
    reqLogin({
        username: 'admin',
        password: '111111'
    })
})

</script>
<style scoped lang="scss">
    .login-box {
        display: flex;
        width: 100vw;
        height: 100vh;
        padding-top: 240px;
        background: url('@/assets/login.svg');
        background-size: 100%;
    }
</style>