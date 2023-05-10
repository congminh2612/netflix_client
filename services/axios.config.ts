import axios, { AxiosRequestConfig } from "axios";
import { store } from "../redux/store";
import jwtDecode from "jwt-decode";
import { refreshToken } from "@/features/auth/services/refreshToken";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/features/auth/AuthSlice";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;
axios.defaults.headers.post["Content-Type"] = "application/json";

const axiosInstance = axios.create();
const currentUser = store.getState().auth.currentUser;
const isLoggedIn = store.getState().auth.isLoggedIn;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (isLoggedIn && currentUser !== null) {
      const accessToken = currentUser.accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

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
