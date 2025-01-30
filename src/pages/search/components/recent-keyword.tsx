import { Fragment } from 'react/jsx-runtime';
import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import * as styles from './recent-keyword.css';

interface Props {
  list: string[];
  handleDelete: () => void;
}

export const RecentKeyword = ({ list, handleDelete }: Props) => {
  const generateList = list.map((keyword, idx) => (
    <Fragment key={idx}>
      <Chip color="default" shape="pill" state="default">
        {keyword}
      </Chip>
    </Fragment>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>최근 검색어</span>
        <ButtonText onClick={handleDelete}>전체삭제</ButtonText>
      </div>
      <div className={styles.body}>{generateList}</div>
    </div>
  );
};
