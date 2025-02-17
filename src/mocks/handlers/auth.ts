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
  http.post('/auth/email/check-duplicated', async () => {
    await delay(200);
    return HttpResponse.json(null, { status: 200 });
  }),
  http.post('/auth/email/send-code', async () => {
    await delay(200);
    return HttpResponse.json(null, { status: 200 });
  }),
  http.post('/auth/email/vertify-code', async () => {
    await delay(200);
    return HttpResponse.json(null, { status: 200 });
  }),
];
