import { useState } from 'react';
import { ArrowDrop } from '@/assets';
import { Button } from '@/ui/button';
import { Spacer } from '@/ui/spacer/spacer';
import { globalVars } from '@/ui/theme.css';
import * as styles from '../result/style.css';

type AISearchSectionProps = {
  title: string;
  description: string;
};

export const AISearchSection = ({
  title,
  description,
}: AISearchSectionProps) => {
  const [isFullHeight, setIsFullHeight] = useState(false);

  const toggleIsFullHeight = () => setIsFullHeight((prev) => !prev);

  return (
    <section className={styles.subContainer}>
      <p className={styles.blueTitle}>AI 진단 결과</p>
      <Spacer size={6} />
      <p className={styles.promptTitle}>{title} </p>
      <Spacer size={4} />
      <p className={styles.propmptDescription({ isFullHeight })}>
        {description}
      </p>

      <Spacer size={14} />
      <Button variant="third" onClick={toggleIsFullHeight}>
        원인 {isFullHeight ? '접기' : '더보기'}
        <ArrowDrop color={globalVars.color.blue400} />
      </Button>
    </section>
  );
};
