import { queryOptions } from '@tanstack/react-query';
import { getUserInfoAPI } from '@/apis/user';
import { LOCAL_STORAGE } from '@/constants';

// 쿼리를 호출하기 전까지 USER ID를 식별할 수 있는 수단이 엑세스 토큰이외에 없어서 임시로 설정
export const userQueryOption = () =>
  queryOptions({
    queryKey: ['user', window.localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)],
    queryFn: getUserInfoAPI,
  });
