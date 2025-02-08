import * as styles from './apply.css';
import { PharmacistCard } from './pharmacist-card';

// 상담신청 탭
export const Apply = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>약사님의 선택</div>
        <button className={styles.btn}>선택 건너뛰기</button>
      </div>
      <div className={styles.cardContianer}>
        <PharmacistCard />
        <PharmacistCard />
        <PharmacistCard />
        <PharmacistCard />
        <PharmacistCard />
      </div>
    </section>
  );
};
