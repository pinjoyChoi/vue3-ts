import request from '@/utils/request';
import type { ApiResponse, LoginModel } from '@/models';

const devApi = process.env.VUE_APP_FLAG;

export const LoginApi = {
  // 登录
  getUserLogin(params: { user: string, password: string }) {
    return request.get<ApiResponse<LoginModel>>('/user', { params })
  },

  // test
  test() {
    return request.get(`${devApi}`)
  },
  login() {
    return request.post(`${devApi}/api/login`)
  }
}
