import request from '@/utils/request';
import type { ApiResponse, LoginModel } from '@/models';

const devApi = process.env.VUE_APP_FLAG;

export const LoginApi = {
  // 登录
  login(params: { user: string, password: string }) {
    return request.get<ApiResponse<LoginModel>>(`${devApi}/api/login`, { params })
  }
}
