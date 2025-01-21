import { Cart, Logo } from '../../assets';
import { AppBar } from '../../ui/app-bar';
import { PageLayout } from '../../ui/layout/page-layout';
import * as styles from './styles.css';

export const HomePage = () => {
  return (
    <PageLayout
      header={
        <AppBar right={<Cart />} className={styles.home}>
          <Logo />
        </AppBar>
      }
      className={styles.home}
    >
      HomePage
    </PageLayout>
  );
};
