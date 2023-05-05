import { RootState } from "@/redux/store";
import axios, { AxiosRequestConfig } from "axios";
import { useSelector } from "react-redux";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
axios.defaults.headers.post["Content-Type"] = "application/json";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosInstance };
