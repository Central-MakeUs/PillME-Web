import { ButtonText } from '../../../ui/button-text';
import { Card } from '../../../ui/card/card';
import { MOCK_PRODUCT_LIST } from '../mock-product';
import * as styles from './recommend-product.css';

type RecommendProductGalleryProps = {
  description: string;
  title: string;
  onClickMoreButton?: VoidFunction;
};

//TODO 추후 데이터 패칭 및 로딩 처리 필요
export const RecommendProductGallery = (
  props: RecommendProductGalleryProps,
) => {
  const { description, title, onClickMoreButton } = props;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.description}>{description}</p>
        <div className={styles.headerTitleContainer}>
          <h4 className={styles.title}>{title}</h4>
          <button onClick={onClickMoreButton}>
            <ButtonText icon>더보기</ButtonText>
          </button>
        </div>
      </header>
      <div className={styles.gallery}>
        {MOCK_PRODUCT_LIST.map((mockProduct) => (
          <div key={mockProduct.name} className={styles.maxWidthBox}>
            <Card {...mockProduct} />
          </div>
        ))}
      </div>
    </section>
  );
};
