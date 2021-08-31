export interface vue3TsResponse<T> {
  resCode: number;
  msg: string;
  data: T;
  [key: string]: any;
}

export type ApiResponse<T> = vue3TsResponse<T>;
