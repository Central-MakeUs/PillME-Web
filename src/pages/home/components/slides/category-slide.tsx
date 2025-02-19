import { HomeRecommendCategory } from '../../recommend-category';
import * as styles from '../../styles.css';
import { RecommendCategory } from '../recommend-category';

type CategorySlideProps = {
  onClickCategory: (category: string) => void;
  categoryList: HomeRecommendCategory[];
};

export const CategorySlide = (props: CategorySlideProps) => {
  const { onClickCategory, categoryList } = props;

  return (
    <div className={styles.recommendCategoryGallery}>
      {categoryList.map(({ icon, name, value }) => (
        <RecommendCategory
          key={name}
          Icon={icon}
          name={name}
          onClick={() => onClickCategory(value)}
        />
      ))}
    </div>
  );
};
