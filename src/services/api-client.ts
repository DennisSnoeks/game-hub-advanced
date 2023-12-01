import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null,
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e484e6c01cb045f584afe105cd44030b",
  },
});

class APIClient<T> {
  endpoint : string;

  constructor(endpoint: string){
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }

  get = (slug: string | number) => {
    return axiosInstance
    .get<T>(this.endpoint + '/' + slug)
    .then(res => res.data)
  }


}

export default APIClient;