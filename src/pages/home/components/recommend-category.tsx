import { ElementType } from 'react';
import * as styles from './recommend-category.css';

type RecommendCategoryProps = {
  Icon: ElementType;
  name: string;
};

export const RecommendCategory = (props: RecommendCategoryProps) => {
  const { Icon, name } = props;

  return (
    <div className={styles.container}>
      <Icon />
      <p className={styles.description}>{name}</p>
    </div>
  );
};
