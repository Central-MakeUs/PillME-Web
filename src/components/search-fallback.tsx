import { motion } from 'motion/react';
import emptySearchResultImage from '@/assets/search_empty.png';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './search-fallback.css';

export const SearchFallback = () => {
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
        <p className={styles.title}>현재 찾으시는 검색 결과가 없어요</p>
        <Spacer size={8} />
        <p className={styles.description}>정확하게 입력하셨는지 확인해보세요</p>
      </motion.div>
    </div>
  );
};
