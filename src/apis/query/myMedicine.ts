import { queryOptions } from '@tanstack/react-query';
import { fetcher } from '../fetcher';
import {
  GetMYMedicineAnalysiAPIResponse,
  GetMyMedicineAPIResponse,
} from '../types/myMedicine';

export const myMedicineQueryKeys = {
  all: () => ['myMedicine'],
  lists: () => [...myMedicineQueryKeys.all(), 'list'],
  analysis: () => [...myMedicineQueryKeys.all(), 'analysis'],
};

export const myMedicneQueryOption = {
  list: () =>
    queryOptions({
      queryKey: [...myMedicineQueryKeys.lists()],
      queryFn: getMyMedicineAPI,
    }),
  analysis: () =>
    queryOptions({
      queryKey: [...myMedicineQueryKeys.analysis()],
      queryFn: getMYMedicineAnalysisAPI,
    }),
};

const getMyMedicineAPI = () =>
  fetcher.get<GetMyMedicineAPIResponse>('my-medicine');

const getMYMedicineAnalysisAPI = () =>
  fetcher.get<GetMYMedicineAnalysiAPIResponse>('my-medicine/analysis');
