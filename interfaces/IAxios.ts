export interface IAxiosResult<T> {
  loading?: boolean;
  data?: T;
  error?: any;
}

export interface IAxiosOptions {
  headers?: Partial<object>;
  body?: Partial<object>;
  params?: Partial<object>;
  method?: Method;
}

type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";
