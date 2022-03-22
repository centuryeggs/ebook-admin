import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://chenjunjian.com:18082',
  timeout: 10 * 1000,
})
const token = localStorage.getItem('token')
// 请求拦截器
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // 在发送请求之前，判断是否存在token，如果存在，则每个http header都加上token
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)
export const defHttp = axiosInstance
