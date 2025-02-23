import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/product', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        data: [
          {
            id: Date.now(),
            name: '이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 ',
            price: 70_000,
            imageUrl: 'https://picsum.photos/200/300',
            purchaseLink: 'string',
            description: '종근당건강 종근당건강 종근당건강', //TODO 회사 이름인지 문의 필요
            isActive: true,
            healthConcerns: [
              {
                id: 0,
                name: 'string',
                description: 'string',
                imageUrl: 'string',
                ingredients: [
                  {
                    id: 0,
                    name: 'string',
                  },
                ],
              },
            ],
            productIngredients: [
              {
                ingredientId: 0,
                ingredientName: 'string',
                amount: 0,
                unit: 'string',
              },
            ],
          },
        ],
      },
      { status: 200 },
    );
  }),
  http.get('/product/:productId', async ({ params }) => {
    const { productId } = params;
    console.log('Deleting user product ID "%s"', productId);
    await delay(200);
    return HttpResponse.json(
      {
        data: {
          id: Date.now(),
          name: '이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 이뮨베라 ',
          price: 70_000,
          imageUrl: 'https://picsum.photos/200/300',
          purchaseLink: 'string',
          description: '종근당건강 종근당건강 종근당건강', //TODO 회사 이름인지 문의 필요
          isActive: true,
          healthConcerns: [
            {
              id: 0,
              name: '혈압',
              description: 'string',
              imageUrl: 'string',
              ingredients: [
                {
                  id: 0,
                  name: 'string',
                },
              ],
            },
          ],
          productIngredients: [
            {
              ingredientId: 0,
              ingredientName: '루테인',
              amount: 0,
              unit: 'string',
            },
          ],
        },
      },
      { status: 200 },
    );
  }),
];
