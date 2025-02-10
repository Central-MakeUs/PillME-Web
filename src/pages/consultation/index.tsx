import { useSearchParams } from 'react-router';
import { Cart } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import { Apply } from './components/apply';
import * as styles from './page.css';

// 여자, 남자 사진 랜덤
// disabled 조건 필요

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
          <AppBar right={<Cart />}>상담</AppBar>
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
        <TabContent value="my-consultation">나의 상담</TabContent>
      </Tab>
    </PageLayout>
  );
};
