import { defHttp } from '/@/utils/http/axios'
import { LoginParams } from './model/userModel'

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  console.log('loginApi函数入参', params)
  return defHttp({ url: '/user/login', method: 'POST', params })
}
