import { motion } from 'motion/react';
import { Link } from 'react-router';
import emptySearchResultImage from '@/assets/search_empty.png';
import { Button } from '@/ui/button';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './fallback.css';

export const Fallback = () => {
  return (
    <div className={styles.center}>
      <motion.div
        className={styles.centerStack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.img
          width={182}
          height={182}
          src={emptySearchResultImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          alt="빈 검색"
        />
        <p className={styles.title}>현재 장바구니에 담긴 제품이 없어요</p>
        <Spacer size={40} />
        <Link to="/home">
          <Button variant="secondary" size="middle">
            홈으로 돌아가기
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
