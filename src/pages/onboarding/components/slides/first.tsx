import { Spacer } from '@/ui/spacer/spacer';
import { LogoIcon } from '../../assets/LogoIcon';
import * as styles from './first.css';

export const FirstSlide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <LogoIcon />
        <p className={styles.title}>내 건강을 필미로 채우다</p>
        <Spacer size={10} />
        <p className={styles.description}>Fill ME health with PillME</p>
      </div>
    </div>
  );
};
