import { ReactNode } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import emptyImageUrl from '@/assets/img_empty.png';
import { LOCAL_STORAGE } from '@/constants';
import { NotFoundPage } from '@/pages/not-found';
import { Button } from '@/ui/button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './localErrorBoundary.css';

function RetryErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const status = error?.response?.status;

  const isAuthorizedError = status === 401;
  //   const isForbidden = status === 403;

  // if (isAuthorizedError) {
  //   throw error;
  // }

  if (isAuthorizedError) {
    window.localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
    return <NotFoundPage />;
  }

  return (
    <PageLayout className={styles.container}>
      <img className={styles.image} src={emptyImageUrl} />
      <p className={styles.message}>현재 정보를 불러올 수 없어요.</p>
      <Spacer size={40} />
      <Button onClick={() => resetErrorBoundary()} size="middle">
        다시 불러오기
      </Button>
    </PageLayout>
  );
}

function FallbackComponent(props: FallbackProps) {
  // TODO accessToken 갱신 api가 정상화되면
  //만약 401, 403, 404 혹은 그 외 에러가 발생하면 throw props.error

  return <RetryErrorFallback {...props} />;
}

export function LocalErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={FallbackComponent} onReset={reset}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
