import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, RouterProps } from 'react-router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export default async (
  component: ReactNode,
  options?: { routerProps?: RouterProps },
) => {
  const user = userEvent.setup();

  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter {...options?.routerProps}>{component}</MemoryRouter>
      </QueryClientProvider>,
    ),
  };
};
