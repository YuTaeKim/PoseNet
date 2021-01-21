import axios from 'axios';
import {
  StorageGetToken,
  StorageSetToken,
  StorageClearToken,
} from 'utils/Storage';
import * as AuthAPI from './Auth';

// import isRefreshTokenExpired from "utils/isRefreshTokenExpired";

const refreshURL = 'https://api.the-cult.co.kr/api/v1/mall/refresh';
const SERVER_URL = 'https://api.the-cult.co.kr/api/v1';

const Axios = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setHeader(token: string) {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeHeader() {
  delete Axios.defaults.headers.common.Authorization;
}

Axios.interceptors.request.use(
  async (config) => {
    if (config.url === refreshURL) {
      return config;
    }
    const token = await StorageGetToken();
    // console.log('token : ', token);
    if (token && token.access) {
      config.headers['Authorization'] = 'Bearer ' + token.access;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

const UNAUTHORIZED = [403, 401];

Axios.interceptors.response.use(
  (response) => {
    // if (publicRuntimeConfig.LEVEL) {
    //   console.log(response.config.url, response);
    // }
    console.log('#response : ', response);
    return response;
  },
  async (error) => {
    if (error.code === 'ECONNABORTED') {
      console.log('# 타임아웃');

      const customError = new Error('TIME_OUT');
      return Promise.reject(customError);
    }
    if (!error.response) {
      console.log('# error : ', error);
      console.log('# 서버가 죽었거나 네트워크 문제');
      //window.location.replace('/error');

      // 나중에 error.response.status === 500 인 것도 보내버리기. 현재는 request Time Out Error만 보내는 중
      //network error : 서버가 죽었거나 사용자의 네트워크에 문제 . 잠시후 다시 시도해 주세요 메시지 출력하기
      const customError = new Error('SERVER_DOWN');
      return Promise.reject(customError);
    }
    console.log('# error.response : ', error.response);
    const originalRequest = error.config;
    console.log('# originalRequest : ', originalRequest);
    if (
      UNAUTHORIZED.indexOf(error.response.status) > -1 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return AuthAPI.refreshToken()
        .then(async (res: any) => {
          if (res.status === 200) {
            const { access, refresh } = res?.data;
            await StorageSetToken(access, refresh);
            await setHeader(access);
            return Axios(originalRequest);
          }
        })
        .catch((err) => {
          //refresh Token not verified
          window.location.replace('/login');
          console.log('# err : ', err);
          console.log('# refresh token error');
          StorageClearToken();
        });
    }

    // if (UNAUTHORIZED.indexOf(error.response.status) > -1) {
    //   console.log('# Error: ', error.response.data.detail);
    //   return Promise.reject(error);
    // }

    return Promise.reject(error);
  },
);

export default Axios;
