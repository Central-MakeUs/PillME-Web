import { setupWorker } from 'msw/browser';
import { handlers as authHandlers } from './handlers/auth';
import { handlers as productHandlers } from './handlers/product';
import { handlers as userHandlers } from './handlers/user';

export const worker = setupWorker(
  ...authHandlers,
  ...productHandlers,
  ...userHandlers,
);
