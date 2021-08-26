export interface AxiosResponse<T> {
  code: number;
  msg: string;
  data: T;
  [key: string]: any;
}

export type ApiResponse<T> = AxiosResponse<T>;
