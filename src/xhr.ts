/*
 * @Description:
 * @Author: lqzh
 * @Date: 2020-03-12 16:46:31
 * @LastEditTime: 2020-03-12 16:50:05
 */
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
