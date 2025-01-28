import { ButtonText } from '../../../ui/button-text';
import { Card } from '../../../ui/card/card';
import { MOCK_PRODUCT_LIST } from '../mock-product';
import * as styles from './recommend-product.css';

type RecommendProductGalleryProps = {
  description: string;
  title: string;
};

//TODO 추후 데이터 패칭 및 로딩 처리 필요
export const RecommendProductGallery = (
  props: RecommendProductGalleryProps,
) => {
  const { description, title } = props;

  return (
    <section className={styles.container}>
      {/* TODO 타이포 스타일 추가 필요 */}
      <header className={styles.header}>
        <p>{description}</p>
        <div className={styles.headerTitleContainer}>
          <h4>{title}</h4>
          <ButtonText icon>더보기</ButtonText>
        </div>
      </header>
      <div className={styles.gallery}>
        {MOCK_PRODUCT_LIST.map((mockProduct) => (
          <Card key={mockProduct.name} {...mockProduct} />
        ))}
      </div>
    </section>
  );
};
