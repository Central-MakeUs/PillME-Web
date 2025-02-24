import { PropsWithChildren } from 'react';
import * as styles from './KeywordList.css';

export const KeywordList = () => {
  return (
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
