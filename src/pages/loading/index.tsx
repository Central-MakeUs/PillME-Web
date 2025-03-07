import Lottie from 'react-lottie-player';
import { PageLayout } from '@/ui/layout/page-layout';
import loadingJson from './loading.json';
import * as styles from './page.css';

export const Loading = () => {
  return (
    <PageLayout className={styles.stack}>
      <Lottie play animationData={loadingJson} className={styles.loader} />
    </PageLayout>
  );
};
