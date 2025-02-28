import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import { GetCartAPIResponse } from '../types/cart';

export const cartQueryKeys = {
  all: () => ['cart'],
  lists: () => [...cartQueryKeys.all(), 'list'],
};

export const cartQueryOption = {
  list: () =>
    queryOptions({
      queryKey: [...cartQueryKeys.all()],
      queryFn: getCartAPI,
    }),
};

const getCartAPI = () => fetcher.get<GetCartAPIResponse>('cart');
