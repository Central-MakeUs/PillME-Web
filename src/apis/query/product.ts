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
  SearchWithAIAPIRespinse,
  getProductDetailAPIResponse,
} from '../types/product';

export const productQueryKeys = {
  all: () => ['product'],
  lists: () => [...productQueryKeys.all(), 'list'],
  details: () => [...productQueryKeys.all(), 'detail'],
  distributions: () => [...productQueryKeys.all(), 'distribution'],
  analysis: () => [...productQueryKeys.all(), 'analysis'],
  ai: () => [...productQueryKeys.all(), 'search'],
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
  ai: ({ search, enabled }: { search: string; enabled: boolean }) =>
    queryOptions({
      queryKey: [...productQueryKeys.ai(), search],
      queryFn: () => searchWithAI({ search }),
      enabled,
      throwOnError: true,
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
  fetcher.get<GetProductAnalysisAPIResponse>(`product/analysis/${productId}`);

const searchWithAI = ({ search }: { search: string }) =>
  fetcher.get<SearchWithAIAPIRespinse>('product/gpt', {
    searchParams: {
      search,
    },
  });
