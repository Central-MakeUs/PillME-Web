import { EmblaOptionsType } from 'embla-carousel';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Button } from '@/ui/button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { EmailIcon } from './assets/EmailIcon';
import fourth from './assets/fourth.webp';
import second from './assets/second.webp';
import third from './assets/third.webp';
import { Carousel, CarouselProps } from './components/carousel';
import { FirstSlide } from './components/slides/first';
import { Slide } from './components/slides/slide';
import * as styles from './page.css';

const OPTIONS: EmblaOptionsType = { align: 'start', containScroll: false };
const SLIDES: CarouselProps['slides'] = [
  { Component: FirstSlide, props: {} },
  {
    Component: Slide,
    props: {
      title: 'AI 증상 검색',
      description: '나의 증상을 적어 검색해보세요',
      imageUrl: second,
    },
  },
  {
    Component: Slide,
    props: {
      title: '약사와의 상담',
      description: '상담을 통해 궁금증을 해결해보세요!',
      imageUrl: third,
    },
  },
  {
    Component: Slide,
    props: {
      title: '맞춤 성분 분석',
      description: '복약하는 건강기능 식품에 따른 맞춤 성분 분석',
      imageUrl: fourth,
    },
  },
];

export const OnboardingPage = () => {
  const navigate = useNavigate();

  const goLogin = () => navigate('/login');
  const goHome = () => navigate('/home');

  return (
    <PageLayout className={styles.onboarding}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Carousel slides={SLIDES} options={OPTIONS} />
        <div className={styles.linkContainer}>
          <Button
            variant="third"
            size="large"
            left={<EmailIcon />}
            onClick={goLogin}
          >
            이메일로 로그인
          </Button>
          <Spacer size={25} />
          <button className={styles.text} onClick={goHome}>
            먼저 둘러보기
          </button>
        </div>
      </motion.div>
    </PageLayout>
  );
};
