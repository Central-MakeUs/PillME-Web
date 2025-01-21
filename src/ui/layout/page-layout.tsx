import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { cx } from '../util';
import * as styles from './page-layout.styles.css';

export type LayoutProps = {
  header?: ReactNode;
} & ComponentProps<'div'>;

export const PageLayout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children, className } = props;

  return (
    <>
      {header}
      <div className={cx(styles.pageLayoutContent, className)}>{children}</div>
    </>
  );
};
