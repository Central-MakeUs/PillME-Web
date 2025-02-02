import { Chip } from '@/ui/chip';
import * as styles from './recommend-keyword.css';

export const Recommendkeyword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>추천 검색어</span>
      </div>
      <div className={styles.body}>
        <Chip
          shape="pill"
          borderColor="grey100"
          backgroundColor="grey100"
          color="black"
        >
          장이 꼬이는 느낌이 들어요
        </Chip>
        <Chip
          shape="pill"
          borderColor="grey100"
          backgroundColor="grey100"
          color="black"
        >
          장이 꼬이는 느낌이 들어요
        </Chip>
        <Chip
          shape="pill"
          borderColor="grey100"
          backgroundColor="grey100"
          color="black"
        >
          배에서 꾸르륵 소리가 나요
        </Chip>
        <Chip
          shape="pill"
          borderColor="grey100"
          backgroundColor="grey100"
          color="black"
        >
          속이 더부룩해요
        </Chip>
      </div>
    </div>
  );
};
