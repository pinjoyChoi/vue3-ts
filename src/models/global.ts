export interface AxiosResponse<T> {
  code: number;
  message: string;
  data: T;
  [key: string]: any;
}

export type ApiResponse<T> = AxiosResponse<T>;
