import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets';
import { AppBar, AppBarElement } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import { Spacer } from '@/ui/spacer/spacer';
import { KeywordList } from './components/KeywordList';
import { PillBoxCardList } from './components/PillBoxCardList';
import * as styles from './page.css';

export const PillboxNewPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [keyword, setKeyword] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setKeyword(value);

  return (
    <PageLayout
      header={
        <AppBar
          left={
            <AppBarElement onClick={goBack}>
              <ArrowLeft />
            </AppBarElement>
          }
          variant="page"
        >
          복용 제품 추가
        </AppBar>
      }
    >
      <div className={styles.searchFieldContainer}>
        <SearchField />
      </div>
      <PillBoxCardList />
      {/* <KeywordList /> */}
      {/* <SearchFallback /> */}
    </PageLayout>
  );
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
