import { fetcher } from '../fetcher';
import {
  CheckDuplicatedEmailAPIRequest,
  JoinAPIRequest,
  JoinAPIResponse,
  LoginAPIRequest,
  LoginAPIResponse,
  SendEmailCodeAPIRequest,
  SendVertifyEmailCodeAPIRequest,
} from '../types/auth';

export const checkDuplicatedEmailAPI = (
  checkDuplicatedEmailAPIRequest: CheckDuplicatedEmailAPIRequest,
) =>
  fetcher.post('auth/email/check-duplicated', {
    json: {
      ...checkDuplicatedEmailAPIRequest,
    },
  });

export const sendEmailCodeAPI = (
  sendEmailCodeAPIRequest: SendEmailCodeAPIRequest,
) =>
  fetcher.post('auth/email/send-code', {
    json: {
      ...sendEmailCodeAPIRequest,
    },
  });

export const sendVertifyEmailCodeAPI = (
  sendVertifyEmailCodeAPIRequest: SendVertifyEmailCodeAPIRequest,
) =>
  fetcher.post('auth/email/verify-code', {
    json: {
      ...sendVertifyEmailCodeAPIRequest,
    },
  });

export const joinAPI = (joinAPIRequest: JoinAPIRequest) =>
  fetcher.post<JoinAPIResponse>('auth/join', {
    json: {
      ...joinAPIRequest,
    },
  });

export const loginAPI = (LoginAPIRequest: LoginAPIRequest) =>
  fetcher.post<LoginAPIResponse>('auth/login', {
    json: {
      ...LoginAPIRequest,
    },
  });
