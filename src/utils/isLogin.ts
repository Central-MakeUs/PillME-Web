import { LOCAL_STORAGE } from '@/constants';

export const isLogin = () => localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
