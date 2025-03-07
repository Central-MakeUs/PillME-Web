import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import {
  GetProductAnalysisAPIRequest,
  GetProductAnalysisAPIResponse,
  GetProductDetailAPIReqeust,
  GetProductDistributionAPIRequest,
  GetProductDistributionAPIResponse,
  GetProductListAPIRequest,
  GetProductListAPIResponse,
  getProductDetailAPIResponse,
} from '../types/product';

export const productQueryKeys = {
  all: () => ['product'],
  lists: () => [...productQueryKeys.all(), 'list'],
  details: () => [...productQueryKeys.all(), 'detail'],
  distributions: () => [...productQueryKeys.all(), 'distribution'],
  analysis: () => [...productQueryKeys.all(), 'analysis'],
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
  distribution: ({ productId }: GetProductDistributionAPIRequest) =>
    queryOptions({
      queryKey: [...productQueryKeys.distributions(), productId],
      queryFn: () => getProductDistributionAPI({ productId }),
    }),
  analysis: ({ productId }: GetProductAnalysisAPIRequest) =>
    queryOptions({
      queryKey: [...productQueryKeys.analysis()],
      queryFn: () => getProductAnalysisAPI({ productId }),
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

const getProductDistributionAPI = ({
  productId,
}: GetProductDistributionAPIRequest) =>
  fetcher.get<GetProductDistributionAPIResponse>(
    `product/distribution/${productId}`,
  );

const getProductAnalysisAPI = ({ productId }: GetProductAnalysisAPIRequest) =>
  fetcher.post<GetProductAnalysisAPIResponse>(`product/analysis/${productId}`);
