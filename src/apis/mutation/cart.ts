import { fetcher } from '../fetcher';
import { AddCartAPIRequest, DeleteCartAPIRequest } from '../types/cart';

export const addCartAPI = (data: AddCartAPIRequest) =>
  fetcher.post('cart', {
    json: data,
  });

export const deleteCartAPI = (data: DeleteCartAPIRequest) =>
  fetcher.delete('cart/multiple', {
    json: data,
  });
