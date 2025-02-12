import { useNavigate } from 'react-router';
import { ConsultComplete } from '@/assets';
import { Button } from '@/ui/button';
import * as styles from './style.css';

export const ConsultationCompletePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>상담 내용을 전달했어요</div>
        <div className={styles.subTitle}>
          상담에 대한 약사님의 답변은
          <br />
          <span className={styles.bold}>상담탭 &gt; 나의 상담</span>
          에서 확인할 수 있어요
        </div>
      </div>
      <ConsultComplete className={styles.mid} />
      <Button
        size="large"
        variant="primary"
        onClick={() => navigate('/consultation?tab=my-consultation')}
      >
        상담탭 돌아가기
      </Button>
    </div>
  );
};
