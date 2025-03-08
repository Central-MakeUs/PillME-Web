import { useNavigate } from 'react-router';
import { Chip } from '@/ui/chip';
import * as styles from './recommend-keyword.css';

export interface searchTypeProp {
  searchType: string | undefined;
}

const keywords = [
  '장이 꼬이는 느낌이 들어요',
  '야채 섭취가 부족해요',
  '배에서 꾸르륵 소리가 나요',
  '속이 더부룩해요',
];

export const Recommendkeyword = ({ searchType }: searchTypeProp) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>추천 검색어</span>
      </div>
      <div className={styles.body}>
        {keywords.map((keyword, index) => (
          <Chip
            key={index}
            shape="pill"
            borderColor="grey100"
            backgroundColor="grey100"
            color="black"
            onClick={() =>
              navigate(`/search/${searchType}/result?keyword=${keyword}`)
            }
            right={keyword}
          />
        ))}
      </div>
    </div>
  );
};
