import { queryOptions } from '@tanstack/react-query';
import { LOCAL_STORAGE } from '@/constants';
import { fetcher } from '../fetcher';
import { UserInfoResponse } from '../types/user';

const userQueryKeys = {
  all: () => ['user'],
};

export const userQueryOption = {
  all: () =>
    queryOptions({
      queryKey: [
        ...userQueryKeys.all(),
        window.localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN),
      ],
      queryFn: getUserInfoAPI,
    }),
};

const getUserInfoAPI = () => fetcher.get<UserInfoResponse>('user/info');
