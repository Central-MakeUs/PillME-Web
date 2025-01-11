import type { Options, ResponsePromise } from 'ky';
import ky from 'ky';

const defaultOption: Options = {
  retry: 0,
  timeout: 30_000,
};

// TODO 추후 API_ENDPOINT 변경 필요
const API_ENDPOINT = '';

//TODO 토큰 헤더에 담는 로직 + 갱신 로직 추가 필요
export const instance = ky.create({
  prefixUrl: API_ENDPOINT,
  headers: {
    'content-type': 'application/json',
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
