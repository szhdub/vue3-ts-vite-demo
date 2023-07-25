import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginForm, loginResponseData } from '@/api/user/types'
import { SET_TOKEN } from '@/utils/token'
import { ASSESS_TOKEN_KEY } from '@/enums/cacheEnum'

interface UserState {
  token: string | null
}

// 创建小仓库
let useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: localStorage.getItem(ASSESS_TOKEN_KEY),
  }),
  // 用于处理异步|逻辑
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(this.token)

        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
