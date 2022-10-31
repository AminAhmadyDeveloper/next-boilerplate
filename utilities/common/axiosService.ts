import axios from "axios";
import { IAxiosOptions, IAxiosResult } from "@interfaces/IAxios";

const axiosRequest = async <T>(path: string, options?: IAxiosOptions) => {
  let axiosResult: IAxiosResult<T> = { loading: true };

  try {
    const { data }: IAxiosResult<T> = await axios({
      method: options?.method,
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: path,
      data: options?.body,
      params: options?.params,
      headers: options?.headers,
    });
    axiosResult = { loading: false, data };
  } catch (error: any) {
    axiosResult = { loading: false, error: error.response.data };
  }

  return axiosResult;
};

export default axiosRequest;
