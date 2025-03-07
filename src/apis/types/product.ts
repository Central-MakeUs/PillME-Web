import { ResponseFormat } from './common';
import { MedicineAnalysisCategory, MedicineAnalysisStatus } from './myMedicine';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  purchaseLink: string;
  description: string;
  healthConcerns: Array<{
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  }>;
  productIngredients: Array<{
    ingredientName: string;
    amount: number;
    unit: string;
  }>;
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

export type GetProductDistributionAPIRequest = {
  productId: number;
};

export type ProductDistribution = {
  ingredientName: string;
  correctionAmount: number;
  fullMark: number;
  unit: string;
};

export type GetProductDistributionAPIResponse = ResponseFormat<
  ProductDistribution[]
>;

export type GetProductAnalysisAPIRequest = {
  productId: number;
};

export type GetProductAnalysisAPIResponse = ResponseFormat<{
  summary: [
    {
      statusType: MedicineAnalysisStatus;
      count: number;
      items: string[];
    },
  ];
  ingredients: [
    {
      ingredientName: string;
      category: MedicineAnalysisCategory;
      totalAmount: number;
      minIntake: number;
      maxIntake: number;
      upperLimit: number;
      unit: string;
      status: MedicineAnalysisStatus;
    },
  ];
}>;

export type SearchWithAIAPIRespinse = ResponseFormat<{
  title: string;
  description: string;
  ingredients: string[];
}>;
