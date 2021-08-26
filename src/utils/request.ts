/*
* axios 拦截器
*/

import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_FLAG,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 无 token
    if (res.code === 403) {
      // 跳转登录页
    } else {
      return res
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service