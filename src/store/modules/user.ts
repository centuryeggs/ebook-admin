import { defineStore } from 'pinia'

interface UserState {
  userInfo: object | null
  token?: string
  roleList: any[]
  sessionTimeout?: boolean
  lastUpdateTime: number
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    sessionTimeout: false,
    lastUpdateTime: 0,
  }),
  getters: {},
  actions: {
    async login() {
      alert('login')
    },
  },
})
