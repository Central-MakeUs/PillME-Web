import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import {
  GetProductDetailAPIReqeust,
  GetProductListAPIRequest,
  GetProductListAPIResponse,
  getProductDetailAPIResponse,
} from '../types/product';

export const productQueryKeys = {
  all: () => ['product'],
  lists: () => [...productQueryKeys.all(), 'list'],
  details: () => [...productQueryKeys.all(), 'detail'],
};

export const productQueryOption = {
  list: (data: GetProductListAPIRequest) =>
    queryOptions({
      queryKey: [...productQueryKeys.lists(), data],
      queryFn: () => getProductListAPI(data),
    }),
  detail: ({ productId }: GetProductDetailAPIReqeust) =>
    queryOptions({
      queryKey: [...productQueryKeys.details(), productId],
      queryFn: () => getProductDetailAPI({ productId }),
    }),
};

const getProductListAPI = ({
  search,
  categoryIds,
  ingredientIds,
}: GetProductListAPIRequest) => {
  const searchParams: Record<string, string> = {};

  if (search) {
    searchParams.search = search;
  }

  if (categoryIds?.length) {
    searchParams.categoryIds = categoryIds.join(',');
  }

  if (ingredientIds?.length) {
    searchParams.ingredientIds = ingredientIds.join(',');
  }

  return fetcher.get<GetProductListAPIResponse>('product', {
    searchParams,
  });
};

const getProductDetailAPI = ({ productId }: GetProductDetailAPIReqeust) =>
  fetcher.get<getProductDetailAPIResponse>(`product/${productId}`);
