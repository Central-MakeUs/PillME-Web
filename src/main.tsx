import { createRoot } from 'react-dom/client';
import App from './App';

async function deferRender() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  // eslint-disable-next-line import/extensions
  const { worker } = await import('./mocks/browser.ts');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

deferRender().then(() =>
  createRoot(document.getElementById('root')!).render(<App />),
);
