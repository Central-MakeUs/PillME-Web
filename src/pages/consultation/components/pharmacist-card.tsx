import { useNavigate } from 'react-router';
import { PharmacistBlue } from '@/assets';
import { Button } from '@/ui/button';
import * as styles from './pharmacist-card.css';

export const PharmacistCard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <PharmacistBlue />
      <div className={styles.info}>
        <div className={styles.name}>김필미 약사</div>
        <div className={styles.tags}>
          <span className={styles.importantTag}>#혈압관리</span>
          <span>#영양요법</span>
          <span>#눈건강</span>
        </div>
        <Button
          size="small"
          variant="primary"
          className={styles.btn}
          onClick={() => navigate('/consultation/new')}
        >
          상담 신청
        </Button>
      </div>
    </div>
  );
};
