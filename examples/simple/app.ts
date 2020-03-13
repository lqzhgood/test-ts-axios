/*
 * @Descripttion:
 * @Author: lqzh
 * @Date: 2020-03-12 17:05:05
 * @LastEditTime: 2020-03-12 17:05:05
 */
import axios from '../../src/index'

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2
    }
})