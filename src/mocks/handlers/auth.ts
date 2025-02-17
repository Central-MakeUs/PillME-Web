import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.post('/auth/login', async () => {
    await delay(200);
    return HttpResponse.json(
      {
        data: {
          accessToken: 'accessToken',
          refreshToken: 'refreshToken',
        },
      },
      { status: 200 },
    );
  }),
];
