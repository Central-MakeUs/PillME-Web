import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';
import * as styles from './popular-keyword.css';
import { searchTypeProp } from './recommend-keyword';

const keywords = [
  '프로틴',
  '다이어트',
  '오메가3',
  '프로바이오틱스',
  '호르몬',
  '프로틴',
  '다이어트',
  '오메가3',
  '프로바이오틱스',
  '호르몬',
];

export const PopularKeyword = ({ searchType }: searchTypeProp) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.title}>인기검색 키워드</div>
      <div className={styles.gridContainer}>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <Fragment key={rowIndex}>
            <div
              className={styles.keywordItem}
              onClick={() =>
                navigate(
                  `/search/${searchType}/result?keyword=${keywords[rowIndex]}`,
                )
              }
            >
              <span className={styles.rank}>{rowIndex + 1}</span>
              <span className={styles.keyword}>{keywords[rowIndex]}</span>
            </div>
            <div
              className={styles.keywordItem}
              onClick={() =>
                navigate(
                  `/search/${searchType}/result?keyword=${keywords[rowIndex + 5]}`,
                )
              }
            >
              <span className={styles.rank}>{rowIndex + 6}</span>
              <span className={styles.keyword}>{keywords[rowIndex + 5]}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
