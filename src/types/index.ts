/*
 * @Descripttion:
 * @Author: lqzh
 * @Date: 2020-03-12 16:41:37
 * @LastEditTime: 2020-03-12 16:45:03
 */
export type Method =
  | 'get'
  | 'Get'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
