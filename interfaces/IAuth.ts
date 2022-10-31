export interface IAuth {
  status: boolean;
  token: string;
}

export interface IDefaultHeaders {
  Authentication: string;
}

export interface IAxiosConfig {
  headers: IDefaultHeaders;
}
