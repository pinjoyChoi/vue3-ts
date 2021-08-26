import request from '@/utils/request';
import type { ApiResponse, LoginModel } from '@/models';

export const LoginApi = {
  // 登录
  getUserLogin(params: { user: string, password: string }) {
    return request.get<ApiResponse<LoginModel>>('/user', { params })
  },
}