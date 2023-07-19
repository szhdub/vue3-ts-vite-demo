<template>
  <div class="login-box">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>登录</h1>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="state.formInline.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" resize="both" :prefix-icon="Lock" v-model="state.formInline.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="state.loading" plain @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { getImageCaptcha } from '@/api/login'

const state = reactive({
  loading: false,
  formInline: { username: 'admin', password: '1' }
});


// const route = useRoute();
const router = useRouter()
const useStore = useUserStore()

// const setCaptcha = async () => {
//   const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
//   state.captcha = img;

// }

const handleSubmit = async () => {
  const { username, password } = state.formInline;
  if(username.trim() == '' || password.trim() == ''){
    ElNotification({
      type: 'warning',
      message: '用户名或密码不能为空！'
    })
  }
  state.loading = true;
  try {
    await useStore.userLogin(state.formInline);
    router.push('/')
    ElNotification({
      type: 'success',
      title: '登录成功！',
      message: '欢迎进入！'
    })
  } catch (error) {
    state.loading = false;
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })

  }

}

</script>
<style scoped lang="scss">
.login-box {
  width: 100%;
  height: 100vh;
  background: url('@/assets/login.svg');
  background-size: cover;

}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  font-size: 30px;

  h1 {
    font-weight: 600;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
