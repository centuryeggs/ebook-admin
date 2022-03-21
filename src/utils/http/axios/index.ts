import axios from 'axios'
import type { AxiosInstance } from 'axios'
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://chenjunjian.com:18082',
  timeout: 10 * 1000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  transformRequest: () => {},
  transformResponse: () => {},
})
export const defHttp = axiosInstance
