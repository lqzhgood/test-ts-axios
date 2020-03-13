/*
 * @Descripttion:
 * @Author: lqzh
 * @Date: 2020-03-12 17:17:49
 * @LastEditTime: 2020-03-13 10:46:57
 */

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
