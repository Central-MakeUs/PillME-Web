import { fetcher } from '../fetcher';
import {
  AddMyMedicineAPIRequest,
  AddMyMedicineAPIResponse,
  DeleteMyMedicineAPIRequest,
} from '../types/myMedicine';

export const addMyMedicineAPI = (data: AddMyMedicineAPIRequest) =>
  fetcher.post<AddMyMedicineAPIResponse>('my-medicine', { json: data });

export const deleteMyMedicineAPI = ({
  myMedicineId,
}: DeleteMyMedicineAPIRequest) => fetcher.delete(`my-medicine/${myMedicineId}`);
