import emptySearchResultImage from '@/assets/search_empty.png';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './search-fallback.css';

export const SearchFallback = () => {
  return (
    <div className={styles.center}>
      <div className={styles.centerStack}>
        <img
          width={182}
          height={182}
          src={emptySearchResultImage}
          alt="빈 검색"
        />
        <p className={styles.title}>현재 찾으시는 검색 결과가 없어요</p>
        <Spacer size={8} />
        <p className={styles.description}>정확하게 입력하셨는지 확인해보세요</p>
      </div>
    </div>
  );
};
