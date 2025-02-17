import { setupWorker } from 'msw/browser';
import { handlers as authHandlers } from './handlers/auth';

export const worker = setupWorker(...authHandlers);
