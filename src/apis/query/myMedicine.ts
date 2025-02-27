import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import { GetMyMedicineAPIResponse } from '../types/myMedicine';

const myMedicineQueryKeys = {
  all: () => ['myMedicine'],
  lists: () => [...myMedicineQueryKeys.all(), 'list'],
};

export const myMedicneQueryOption = {
  list: () =>
    queryOptions({
      queryKey: [...myMedicineQueryKeys.all()],
      queryFn: getUserInfoAPI,
    }),
};

const getUserInfoAPI = () =>
  fetcher.get<GetMyMedicineAPIResponse>('my-medicine');
