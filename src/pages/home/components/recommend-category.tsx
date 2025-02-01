import { ComponentProps, ElementType } from 'react';
import * as styles from './recommend-category.css';

type RecommendCategoryProps = {
  Icon: ElementType;
  name: string;
} & ComponentProps<'div'>;

export const RecommendCategory = (props: RecommendCategoryProps) => {
  const { Icon, name, ...restProps } = props;

  return (
    <div className={styles.container} {...restProps}>
      <Icon />
      <p className={styles.description}>{name}</p>
    </div>
  );
};
