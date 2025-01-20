import { ComponentProps } from 'react';
import * as styles from './mobile-layout.styles.css.ts';

type MobileLayoutProps = ComponentProps<'div'>;

export const MobileLayout = (props: MobileLayoutProps) => {
  const { children, ...restProps } = props;

  return (
    <div className={styles.mobileLayoutWrapper}>
      <div className={styles.mobileLayoutInner} {...restProps}>
        {children}
      </div>
    </div>
  );
};
