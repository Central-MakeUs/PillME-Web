import { EmblaOptionsType } from 'embla-carousel';
import { Button } from '@/ui/button';
import { PageLayout } from '@/ui/layout/page-layout';
import { EmailIcon } from './assets/EmailIcon';
import { Carousel } from './components/carousel';
import * as styles from './page.css';

const OPTIONS: EmblaOptionsType = { align: 'start', containScroll: false };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const OnboardingPage = () => {
  return (
    <PageLayout className={styles.onboarding}>
      <Carousel slides={SLIDES} options={OPTIONS} />
      {/* <Spacer size={48} /> */}
      <div className={styles.linkContainer}>
        <div className={styles.spacer} />
        <Button
          variant="third"
          size="large"
          className={styles.button}
          left={<EmailIcon />}
        >
          이메일로 로그인
        </Button>
        <p className={styles.text}>먼저 둘러보기</p>
      </div>
    </PageLayout>
  );
};
