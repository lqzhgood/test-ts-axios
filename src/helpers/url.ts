/*
 * @Descripttion:
 * @Author: lqzh
 * @Date: 2020-03-12 17:13:54
 * @LastEditTime: 2020-03-13 10:47:54
 */

import { isDate, isObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/gi, '$')
    .replace(/%2c/gi, ',')
    .replace(/%20/gi, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export const buildURL = function(url: string, params?: any): string {
  if (!params) return url

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]

    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(v => {
      if (isDate(val)) {
        v = val.toISOString()
      } else if (isObject(v)) {
        v = JSON.stringify(v)
      }
      parts.push(`${encode(key)}=${encode(v)}`)
    })
  })

  const serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
