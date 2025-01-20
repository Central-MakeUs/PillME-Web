import { PropsWithChildren, ReactNode } from 'react';

export type LayoutProps = {
  header?: ReactNode;
};

export const PageLayout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children } = props;

  return (
    <div
      style={{
        height: 'calc(100dvh - 84px)',
        overflow: 'auto',
      }}
    >
      <div style={{ minHeight: '100%' }}>
        {header}
        {children}
      </div>
    </div>
  );
};
