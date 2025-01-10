import { type PropsWithChildren, useState } from 'react';
import {
  QueryClientProvider as BaseQueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';

export function QueryClientProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            throwOnError: true,
          },
        },
      }),
  );

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
    </BaseQueryClientProvider>
  );
}
