
import axios from "axios";
import {getAuthCredentials} from "./auth"
import {environment} from '../config/environment'

const http = axios.create({
  timeout: 30000,
  baseURL: environment.baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
if(getAuthCredentials){
  http.interceptors.request.use(
    (config) => {
      const { token } = getAuthCredentials();
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

}


export default http;
