import { ResponseFormat } from './common';

export type UserInfoResponse = ResponseFormat<{
  id: number;
  email: string;
  nickname: string;
  birthDate: string;
  gender: string;
}>;

export type UpdateUserInfoRequest = Partial<{
  nickname: string;
  birthDate: string;
  password: string;
}>;
