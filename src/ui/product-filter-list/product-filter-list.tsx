import { PropsWithChildren, ReactNode } from 'react';
import * as styles from './product-filter-list.css';

type ProductFilterListProps = {
  label: ReactNode;
};

export const ProductFilterList = (
  props: PropsWithChildren<ProductFilterListProps>,
) => {
  const { label, children, ...restProps } = props;
  return (
    <div className={styles.container} {...restProps}>
      {label}
      <div className={styles.listContainer}>{children}</div>
    </div>
  );
};
