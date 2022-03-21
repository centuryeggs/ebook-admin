import type { UserInfo } from '/#/store'
import type { ErrorMessageMode } from '/#/axios'
import { defineStore } from 'pinia'
import { LoginParams } from '/@/api/sys/model/userModel'
import { loginApi } from '/@/api/sys/user'

interface UserState {
  userInfo: Nullable<UserInfo>
  token?: string
  roleList: string[]
  sessionTimeout?: boolean
  lastUpdateTime: number
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {},
  actions: {
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean
        mode?: ErrorMessageMode
      },
    ) {
      await loginApi(params)
    },
  },
})
