import { Button } from '@/ui/button';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './PillBoxCardList.css';

export const PillBoxCardList = () => {
  return (
    <div className={styles.pillboxCardListContainer}>
      <PillBoxCard />
      <PillBoxCard />
      <PillBoxCard />
      <PillBoxCard />
      <PillBoxCard />
      <PillBoxCard />
    </div>
  );
};

export const PillBoxCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src="https://picsum.photos/200/300" />
      <div className={styles.cardRight}>
        <div>
          <p className={styles.description}>제약사 브랜드 입력00000</p>
          <Spacer size={6} />
          <p className={styles.title}>웰릿나토킨NATOTOKIN최대글자최대글자</p>
        </div>
        <Button variant="third" size="small">
          내 약통
        </Button>
      </div>
    </div>
  );
};
