import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Cart } from '@/assets';
import useInput from '@/hooks/useInput';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import { Spacer } from '@/ui/spacer/spacer';
import { Switch } from '@/ui/switch';
import { PopularKeyword } from './components/popular-keyword';
import { RecentKeyword } from './components/recent-keyword';
import { Recommendkeyword } from './components/recommend-keyword';
import * as styles from './style.css';

const KEYWORD_SEARCH = 'search';

export const SearchPage = () => {
  const navigate = useNavigate();

  const { searchType } = useParams();
  const [searchMode, setSearchMode] = useState<string>(
    searchType === 'ai' ? '증상 AI 검색' : '제품 검색',
  );

  const searchValue = useInput('');
  const [searchList, setSearchList] = useState<string[]>(
    JSON.parse(localStorage.getItem(KEYWORD_SEARCH) || '[]'),
  );

  const setNewSearchList = (newList: string[]) => {
    setSearchList(newList);
    localStorage.setItem(KEYWORD_SEARCH, JSON.stringify(newList));
  };

  const makeNewSearchedList = (newKeyword: string): string[] => {
    const MAX_LIST_COUNT = 10;

    const newList = [
      newKeyword,
      ...searchList.filter((value) => value !== newKeyword),
    ];
    return newList.slice(0, MAX_LIST_COUNT);
  };

  const handleDeleteSearchList = () => {
    setNewSearchList([]);
  };

  const handleSearch = (keyword: string = searchValue.value) => {
    if (keyword === '') return;

    searchValue.setValue(keyword);
    setNewSearchList(makeNewSearchedList(keyword));
    navigate(`/search/${searchType}/result?keyword=${keyword}`);
  };

  // 자동완성 검색 , 검색어 입력시 검새List가 나타남 (추후 완료)
  // autoList = () => {}

  useEffect(() => {
    setSearchMode(searchType === 'ai' ? '증상 AI 검색' : '제품 검색');
  }, [searchType]);

  const handleModeChange = (mode: string) => {
    const newMode = mode === '증상 AI 검색' ? 'ai' : 'default';
    setSearchMode(mode);

    navigate(`/search/${newMode}`);
  };

  return (
    <PageLayout
      header={
        <AppBar
          left={<ArrowLeft onClick={() => navigate('/home')} />}
          right={<Cart />}
          variant="page"
        >
          <Switch
            left="증상 AI 검색"
            right="제품 검색"
            value={searchMode}
            onValueChange={handleModeChange}
          />
        </AppBar>
      }
    >
      <Spacer size={18} />
      <div
        className={styles.searchContainer}
        onKeyUp={({ key, target }) => {
          if (key === 'Enter') {
            handleSearch((target as HTMLInputElement).value);
          }
        }}
      >
        <SearchField
          hasResetButton
          placeholder="건강 불편 증상을 검색해 보세요"
          value={searchValue.value}
          onChange={searchValue.onChange}
        />
      </div>
      <section className={styles.mainContainer}>
        {searchList.length > 0 && (
          <RecentKeyword
            list={searchList}
            handleDelete={handleDeleteSearchList}
          />
        )}
        <Recommendkeyword />
        <PopularKeyword />
      </section>
    </PageLayout>
  );
};
