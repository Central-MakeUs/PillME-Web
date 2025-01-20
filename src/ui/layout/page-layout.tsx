import { PropsWithChildren, ReactNode } from 'react';
import * as styles from './page-layout.styles.css.ts';

export type LayoutProps = {
  header?: ReactNode;
};

export const PageLayout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children } = props;

  return (
    <>
      {header}
      <div className={styles.pageLayoutContent}>{children}</div>
    </>
  );
};
