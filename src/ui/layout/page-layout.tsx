import { PropsWithChildren, ReactNode } from 'react';
import { cx } from '../util';
import * as styles from './page-layout.styles.css';

export type LayoutProps = {
  header?: ReactNode;
  layoutClassName?: string;
};

export const PageLayout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children, layoutClassName } = props;

  return (
    <>
      {header}
      <div className={cx(styles.pageLayoutContent, layoutClassName)}>
        {children}
      </div>
    </>
  );
};
