import { queryOptions } from '@tanstack/react-query';
import { searchProductListAPI } from '@/apis/product';

export const keywordSearchQueryOption = (search: string) =>
  queryOptions({
    queryKey: ['search', search],
    queryFn: () => searchProductListAPI({ search }),
  });
