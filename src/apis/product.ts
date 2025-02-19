import { ResponseFormat, fetcher } from './fetcher';

type SearchProductListRequest = {
  search: string;
};

type ProductResponse = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  purchaseLink: string;
  description: string;
  isActive: boolean; // TODO 필요한지 문의 필요
  healthConcerns: [
    {
      id: number;
      name: string;
      description: string;
      imageUrl: string;
      ingredients: [
        {
          id: 0;
          name: string;
        },
      ];
    },
  ];
  productIngredients: [
    {
      ingredientId: number;
      ingredientName: string;
      amount: number;
      unit: string;
    },
  ];
};

type SearchProductListResponse = ResponseFormat<ProductResponse[]>;

export const searchProductListAPI = ({ search }: SearchProductListRequest) => {
  const path = '/products';

  return fetcher.get<SearchProductListResponse>(path, {
    searchParams: { search },
  });
};
