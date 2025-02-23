import { ResponseFormat } from './common';

export type CheckDuplicatedEmailAPIRequest = {
  email: string;
};

export type SendEmailCodeAPIRequest = {
  email: string;
};

export type SendVertifyEmailCodeAPIRequest = {
  email: string;
  code: string;
};

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

export type LoginAPIRequest = {
  email: string;
  password: string;
};

export type LoginAPIResponse = ResponseFormat<{
  accessToken: string;
  refreshToken: string;
}>;
