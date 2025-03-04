import {
  ChangeEventHandler,
  FormEventHandler,
  Suspense,
  useState,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ArrowLeft } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { AppBar, AppBarElement } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import { SearchingKeywordList } from './components/KeywordList';
import { PillBoxCardList } from './components/PillBoxCardList';
import * as styles from './page.css';

export const PillboxNewPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchedKeyword = searchParams.get('keyword');

  const [keyword, setKeyword] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setKeyword(value);

  const isSearching = searchedKeyword === null;

  const onClickResetButton = () => {
    if (!isSearching) {
      return;
    }

    setKeyword('');
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    searchParams.set('keyword', keyword);
    setSearchParams(searchParams);
  };

  return (
    <LocalErrorBoundary>
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
          <form onSubmit={onSubmit}>
            <SearchField
              disabled={!isSearching}
              inputMode="search"
              value={searchedKeyword ?? keyword}
              onChange={onChange}
              hasResetButton={isSearching && keyword.length !== 0}
              onClickResetButton={onClickResetButton}
            />
          </form>
        </div>

        {isSearching ? (
          // TODO 키워드 자동완성 추가<SearchingKeywordList keyword={keyword} />
          <></>
        ) : (
          <Suspense>
            <PillBoxCardList keyword={searchedKeyword} />
          </Suspense>
        )}
      </PageLayout>
    </LocalErrorBoundary>
  );
};
