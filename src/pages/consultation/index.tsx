import { Cart } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import { Apply } from './components/apply';
import * as styles from './page.css';

// 여자, 남자 사진 랜덤
// disabled 조건 필요

export const ConsultationPage = () => {
  return (
    <PageLayout
      header={
        <div>
          <div className={styles.separator} />
          <AppBar right={<Cart />}>상담</AppBar>
        </div>
      }
    >
      <Tab defaultValue="상담신청" rootClassName={styles.tabContainer}>
        <TabLabel label="상담 신청" value="상담신청" />
        <TabLabel label="나의 상담" value="나의상담" />

        <TabContent value="상담신청" className={styles.height100}>
          <Apply />
        </TabContent>
        <TabContent value="나의상담">나의 상담</TabContent>
      </Tab>
    </PageLayout>
  );
};
