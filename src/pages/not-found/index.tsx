import { useNavigate } from 'react-router';
import emptyImageUrl from '@/assets/img_empty.png';
import { Button } from '@/ui/button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './page.css';

export function NotFoundPage() {
  const navigate = useNavigate();
  const handleClickNavigateHomeButton = () => {
    navigate('/home', { replace: true });
  };

  return (
    <PageLayout className={styles.container}>
      <img className={styles.image} src={emptyImageUrl} />
      <p className={styles.message}>현재 정보를 불러올 수 없어요.</p>
      <Spacer size={40} />
      <Button onClick={handleClickNavigateHomeButton} size="middle">
        홈으로 이동하기
      </Button>
    </PageLayout>
  );
}
