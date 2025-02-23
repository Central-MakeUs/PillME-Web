import { ResponseFormat } from '../fetcher';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  purchaseLink: string;
  description: string;
  healthConcerns: [
    {
      id: number;
      name: string;
      description: string;
      imageUrl: string;
    },
  ];
  productIngredients: [
    {
      ingredientName: string;
      amount: number;
      unit: string;
    },
  ];
};

export type GetProductListAPIRequest = {
  search?: string;
  categoryIds?: number[];
  ingredientIds?: number[];
};

export type GetProductListAPIResponse = ResponseFormat<Product[]>;

export type GetProductDetailAPIReqeust = {
  productId: number;
};

export type getProductDetailAPIResponse = ResponseFormat<Product>;
