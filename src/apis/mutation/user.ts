import { LOCAL_STORAGE } from '@/constants';
import { fetcher } from '../fetcher';
import { UpdateUserInfoRequest, UserInfoResponse } from '../types/user';

export const logout = () =>
  window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);

export const deleteUserAPI = () => fetcher.delete('user/delete');

export const updateUserInfoAPI = (
  updateUserInfoRequest: UpdateUserInfoRequest,
) =>
  fetcher.put<UserInfoResponse>('user/update', {
    json: {
      ...updateUserInfoRequest,
    },
  });
