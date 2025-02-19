import { LOCAL_STORAGE } from '@/constants';
import { ResponseFormat, fetcher } from './fetcher';

export type CheckDuplicatedEmailAPIRequest = {
  email: string;
};

export const checkDuplicatedEmailAPI = (
  checkDuplicatedEmailAPIRequest: CheckDuplicatedEmailAPIRequest,
) =>
  fetcher.post('auth/email/check-duplicated', {
    json: {
      ...checkDuplicatedEmailAPIRequest,
    },
  });

export type SendEmailCodeAPIRequest = {
  email: string;
};

export const sendEmailCodeAPI = (
  sendEmailCodeAPIRequest: SendEmailCodeAPIRequest,
) =>
  fetcher.post('auth/email/send-code', {
    json: {
      ...sendEmailCodeAPIRequest,
    },
  });

export type SendVertifyEmailCodeAPIRequest = {
  email: string;
  code: string;
};

export const sendVertifyEmailCodeAPI = (
  sendVertifyEmailCodeAPIRequest: SendVertifyEmailCodeAPIRequest,
) =>
  fetcher.post('auth/email/verify-code', {
    json: {
      ...sendVertifyEmailCodeAPIRequest,
    },
  });

export type JoinAPIRequest = {
  email: string;
  password: string;
  nickname: string;
  birthDate: string;
  gender: string;
};

export type JoinAPIResponse = ResponseFormat<{
  accessToken: string;
  refreshToken: string;
}>;

export const joinAPI = (joinAPIRequest: JoinAPIRequest) =>
  fetcher.post<JoinAPIResponse>('auth/join', {
    json: {
      ...joinAPIRequest,
    },
  });

export type LoginAPIRequest = {
  email: string;
  password: string;
};

export type LoginAPIResponse = ResponseFormat<{
  accessToken: string;
  refreshToken: string;
}>;

export const loginAPI = (LoginAPIRequest: LoginAPIRequest) =>
  fetcher.post<LoginAPIResponse>('auth/login', {
    json: {
      ...LoginAPIRequest,
    },
  });

export const logout = () =>
  window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);

export const deleteUserAPI = () => fetcher.delete('user/delete');
