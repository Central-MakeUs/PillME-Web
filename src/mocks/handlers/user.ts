import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/user/info', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        data: {
          id: Date.now(),
          email: 'pillme@acer.com',
          nickname: 'pillme',
          birthDate: '2025.02.19',
          gender: 'FEMALE',
        },
      },
      { status: 200 },
    );
  }),
  http.post('/user/update', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        data: {
          id: Date.now(),
          email: 'pillme@acer.com',
          nickname: 'pillme',
          birthDate: '2025.02.19',
          gender: 'FEMALE',
        },
      },
      { status: 200 },
    );
  }),
];
