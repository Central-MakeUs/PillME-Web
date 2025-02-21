import { LOCAL_STORAGE } from '@/constants';
import { ResponseFormat, fetcher } from './fetcher';

export const logout = () =>
  window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);

const USER_API_PRIFIX = 'user';

export const deleteUserAPI = () => fetcher.delete(`${USER_API_PRIFIX}/delete`);

type UserInfoResponse = ResponseFormat<{
  id: number;
  email: string;
  nickname: string;
  birthDate: string;
  gender: string;
}>;

export const getUserInfoAPI = () =>
  fetcher.get<UserInfoResponse>(`${USER_API_PRIFIX}/info`);

type UpdateUserInfoRequest = Partial<{
  nickname: string;
  birthDate: string;
  password: string;
}>;

export const updateUserInfoAPI = (
  updateUserInfoRequest: UpdateUserInfoRequest,
) =>
  fetcher.post<UserInfoResponse>(`${USER_API_PRIFIX}/update`, {
    json: {
      ...updateUserInfoRequest,
    },
  });
