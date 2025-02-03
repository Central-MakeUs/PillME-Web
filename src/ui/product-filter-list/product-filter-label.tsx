import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { cx } from '../util';
import * as styles from './product-filter-label.css';

type ProductFilterLabelProps = {
  Icon: ReactNode;
} & ComponentProps<'div'>;

export const ProductFilterLabel = (
  props: PropsWithChildren<ProductFilterLabelProps>,
) => {
  const { children, Icon, className, ...restProps } = props;

  return (
    <div {...restProps} className={cx(styles.label, className)}>
      {/* Typo 추가 필요 */}
      <p>{children}</p>
      {Icon}
    </div>
  );
};
