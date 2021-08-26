/*
* axios 拦截器
*/

import axios from 'axios'
import { message } from 'ant-design-vue';

// 创建一个 axios 实例
const service = axios.create({
  baseURL: '',
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
    if (res.code !== 0) {
      message.error(res.message);
      return Promise.reject(res);
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service