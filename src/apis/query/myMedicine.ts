import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import { GetMyMedicineAPIResponse } from '../types/myMedicine';

export const myMedicineQueryKeys = {
  all: () => ['myMedicine'],
  lists: () => [...myMedicineQueryKeys.all(), 'list'],
};

export const myMedicneQueryOption = {
  list: () =>
    queryOptions({
      queryKey: [...myMedicineQueryKeys.lists()],
      queryFn: getMyMedicineAPI,
    }),
};

const getMyMedicineAPI = () =>
  fetcher.get<GetMyMedicineAPIResponse>('my-medicine');
