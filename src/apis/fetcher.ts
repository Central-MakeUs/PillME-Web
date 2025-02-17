import type { Options, ResponsePromise } from 'ky';
import ky from 'ky';
import { LOCAL_STORAGE } from '@/constants';

const defaultOption: Options = {
  retry: 0,
  timeout: 30_000,
};

const API_ENDPOINT = 'http://15.165.247.109:8080/api';
// MSW 사용하기 위해선 아래 엔드 포인트 사용하거나 위의 msw endpoint를 msw path에 합치면 됨
// const API_ENDPOINT = '';

export const instance = ky.create({
  prefixUrl: API_ENDPOINT,
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = window.localStorage.getItem(
          LOCAL_STORAGE.ACCESS_TOKEN,
        );

        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
    afterResponse: [
      // TODO 리프레시 토큰과 연계해서 재 로그인 로직 필요
      async (_request, _options, response) => {
        if (!response.ok && response.status === 401) {
          window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
        }
      },
    ],
  },
  ...defaultOption,
});

export async function parseResponse<T>(response: ResponsePromise) {
  return await response.json<T>();
}

export const fetcher = {
  get: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.get(pathname, options)),
  post: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.post(pathname, options)),
  put: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.put(pathname, options)),
  delete: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.delete(pathname, options)),
};

export type ResponseFormat<T> = {
  status: string;
  data: T;
  message: string;
};
