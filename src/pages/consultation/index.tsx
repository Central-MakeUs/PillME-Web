import { useSearchParams } from 'react-router';
import { CartButton } from '@/components/cart-botton';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import { Apply } from './components/apply';
import { MyConsultation } from './components/my-consultation';
import * as styles from './page.css';

// 상태 조건 필요

export const ConsultationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'apply';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <PageLayout
      header={
        <div>
          <div className={styles.separator} />
          <AppBar right={<CartButton />}>상담</AppBar>
        </div>
      }
    >
      <Tab
        defaultValue={currentTab}
        onValueChange={handleTabChange}
        rootClassName={styles.tabContainer}
      >
        <TabLabel label="상담 신청" value="apply" />
        <TabLabel label="나의 상담" value="my-consultation" />

        <TabContent value="apply" className={styles.height100}>
          <Apply />
        </TabContent>
        <TabContent value="my-consultation" className={styles.height100}>
          <MyConsultation />
        </TabContent>
      </Tab>
    </PageLayout>
  );
};
