import { Fragment } from 'react/jsx-runtime';
import { Delete } from '@/assets';
import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import { globalVars } from '@/ui/theme.css';
import * as styles from './recent-keyword.css';

interface Props {
  list: string[];
  handleDelete: () => void;
  handleDeleteKeyword: (keyword: string) => void;
  handleSearch: (keyword: string) => void;
}

export const RecentKeyword = ({
  list,
  handleDelete,
  handleDeleteKeyword,
  handleSearch,
}: Props) => {
  const generateList = list.map((keyword, idx) => (
    <Fragment key={idx}>
      <Chip
        color="grey800"
        backgroundColor="white"
        borderColor="grey200"
        shape="pill"
        onClick={() => handleSearch(keyword)}
        right={
          <Delete
            color={globalVars.color.grey200}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteKeyword(keyword);
            }}
          />
        }
      >
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
