<template>
  <div class="login-box">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>登录</h1>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" resize="both" :prefix-icon="Lock" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" plain @click="handleSubmit">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { getImageCaptcha } from '@/api/login'

const loginForm = reactive({
  username: 'admin', password: '1'
})

let loading = ref(false)
let loginForms = ref();


//  自定义校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error('帐号长度至少5位！'));
  }
}

const rules = {
  username: [
    // { required: true, message: '用户名或密码不能为空！', trigger: 'change' },
    { trigger: 'change', validator: validatorUserName }
  ],
  password: [
    // { required: true, message: '用户名或密码不能为空！', trigger: 'change' },
  ]
}

const router = useRouter()
const useStore = useUserStore()

// const setCaptcha = async () => {
//   const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
//   state.captcha = img;

// }

const handleSubmit = async () => {
  await loginForms.value.validate()

  const { username, password } = loginForm
  if (username.trim() == '' || password.trim() == '') {
    ElNotification({
      type: 'warning',
      message: '用户名或密码不能为空！',
    })
  }
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    router.push('/')
    ElNotification({
      type: 'success',
      title: '登录成功！',
      message: '欢迎进入！',
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
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