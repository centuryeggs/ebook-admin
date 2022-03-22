import { defHttp } from '/@/utils/http/axios'
import { LoginParams } from './model/userModel'

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp({ url: '/user/login', method: 'post', data: params })
}
