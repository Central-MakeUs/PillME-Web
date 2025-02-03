import { Fufill, Overflow, Shortage } from '@/assets';
import * as styles from './ingredient-card.css';

export type StatusType = '충족' | '부족' | '과다';

const statusConfig: Record<
  StatusType,
  { text: string; Icon: React.ComponentType }
> = {
  충족: { text: '충족', Icon: Fufill },
  부족: { text: '부족', Icon: Shortage },
  과다: { text: '과다', Icon: Overflow },
};

export const IngredientCard = ({ status }: { status: StatusType }) => {
  const { text, Icon } = statusConfig[status];

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>
          4개의 성분 <span className={styles.status({ status })}>{text}</span>
        </div>
        <div className={styles.description}>
          비타민 비타민 비타민 비타민 비타민 비타민 비타민 비타민 비타민 비타민
          비타민 비타민
        </div>
      </div>
      <Icon />
    </div>
  );
};
