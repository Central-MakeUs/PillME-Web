import { Fulfill, Overflow, Shortage } from '@/assets';
import * as styles from './ingredient-card.css';

export type StatusType = '충족' | '부족' | '과다';

const statusConfig: Record<
  StatusType,
  { text: string; Icon: React.ComponentType }
> = {
  충족: { text: '충족', Icon: Fulfill },
  부족: { text: '부족', Icon: Shortage },
  과다: { text: '과다', Icon: Overflow },
};

interface IngredientCardProps {
  status: StatusType;
  count: number;
  items: string[];
}

export const IngredientCard = ({
  status,
  count,
  items,
}: IngredientCardProps) => {
  const { text, Icon } = statusConfig[status];

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>
          {count}개의 성분&nbsp;
          <span className={styles.status({ status })}>{text}</span>
        </div>
        <div className={styles.description}>{items.join(', ')}</div>
      </div>
      <Icon />
    </div>
  );
};
