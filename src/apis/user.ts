import { LOCAL_STORAGE } from '@/constants';
import { fetcher } from './fetcher';

export const logout = () =>
  window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);

export const deleteUserAPI = () => fetcher.delete('user/delete');
