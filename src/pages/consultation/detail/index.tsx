import { useNavigate } from 'react-router';
import { ArrowLeft, PharmacistBlue } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './style.css';

export const ConsultationDetailPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      header={
        <AppBar left={<ArrowLeft />} variant="page">
          상담 내용
        </AppBar>
      }
    >
      <Spacer size={2} className={styles.spacer} />
      <section className={styles.containerQuestion}>
        <div className={styles.cardSubTitle}>2025.01.09 | 담당약사 최필미</div>
        <div className={styles.cardTitle}>
          <span className={styles.cardQ}>Q.</span>수면제를 먹어도 잠이 안 와요
        </div>
        <p>
          요즘 너무 피로하고 계속 졸리고 몸도 무거운데 잠은 오지 않습니다.
          스트레스성 폭시도 하고있습니다.
        </p>
      </section>
      <Spacer size={10} className={styles.spacer} />
      <section className={styles.containerProfile}>
        <PharmacistBlue />
        <div className={styles.profileContent}>
          <div className={styles.profileTitle}>최필미님이 답변했어요</div>
          <div className={styles.profileTags}>
            <div className={styles.profileTagImportant}>#혈압관리</div>
            <div>#영양요볍</div>
            <div>#건강</div>
          </div>
        </div>
      </section>
      <Spacer size={1} className={styles.spacer} />
      <section className={styles.containerDesc}>
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        안녕하세요. 최필미 약사입니다.안녕하세요. 최필미 약사입니다.안녕하세요.
        최필미 약사입니다.안녕하세요. 최필미 약사입니다.
        <br />
        <div className={styles.date}>2025.01.02</div>
        <Button
          size="large"
          variant="primary"
          className={styles.btn}
          onClick={() => navigate(-1)}
        >
          상담종료
        </Button>
      </section>
    </PageLayout>
  );
};
