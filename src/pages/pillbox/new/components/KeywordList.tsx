import { PropsWithChildren } from 'react';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './KeywordList.css';

type Props = {
  keyword: string;
};

export const SearchingKeywordList = (props: Props) => {
  const { keyword } = props;

  return keyword.length === 0 ? (
    <SearchFallback />
  ) : (
    <div className={styles.keywordListContainer}>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
      <Keyword>오징어 </Keyword>
    </div>
  );
};

const Keyword = (props: PropsWithChildren) => {
  const { children } = props;

  return <p className={styles.keyword}>{children}</p>;
};

const SearchFallback = () => {
  return (
    <div className={styles.centerStack}>
      <Spacer size={30} />
      <p className={styles.searchFallbackText}>
        복용중인 약으로 추가할 제품을 찾기 위해
      </p>
      <p className={styles.searchFallbackText}>
        정확한{' '}
        <span className={styles.searchFallbackBoldText}>브랜드명 / 제품명</span>
        으로 검색해주세요.
      </p>
    </div>
  );
};
