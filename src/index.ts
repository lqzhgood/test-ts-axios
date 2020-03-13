/*
 * @Description:
 * @Author: lqzh
 * @Date: 2020-03-12 16:25:25
 * @LastEditTime: 2020-03-13 11:03:49
 */

import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
