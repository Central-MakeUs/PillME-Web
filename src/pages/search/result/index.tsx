import { Suspense, useState } from 'react';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { productQueryOption } from '@/apis/query/product';
import { ArrowLeft, Check } from '@/assets';
import { CartButton } from '@/components/cart-botton';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { SearchFallback } from '@/components/search-fallback';
import { Loading } from '@/pages/loading';
import { AppBar } from '@/ui/app-bar';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Card } from '@/ui/card/card';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import { AISearchSection } from '../components/ai-search-section';
import * as bottomStyles from './bottomSheet.css';
import * as styles from './style.css';

//TODO 정렬 필터에 따라 조회 필요
export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const navigate = useNavigate();
  const { searchType } = useParams();

  return (
    <LocalErrorBoundary>
      <PageLayout
        header={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: 20 }}
          >
            <AppBar
              left={<ArrowLeft onClick={() => navigate(-1)} />}
              right={<CartButton />}
              variant="page"
              className={styles.header}
            >
              <div className={styles.searchContainer}>
                <SearchField
                  hasResetButton
                  placeholder="건강 불편 증상을 검색해 보세요"
                  value={keyword}
                />
              </div>
            </AppBar>
          </motion.div>
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut', delay: 0.2 }}
          exit={{ opacity: 0, y: 20 }}
          className={styles.mainContainer}
        >
          <Suspense fallback={<Loading />}>
            <SearchResultPageInner searchType={searchType} keyword={keyword} />
          </Suspense>
        </motion.div>
      </PageLayout>
    </LocalErrorBoundary>
  );
};

type SearchResultPageInnerProps = {
  searchType?: string;
  keyword: string;
};

const SearchResultPageInner = (props: SearchResultPageInnerProps) => {
  const { keyword, searchType } = props;

  const [isOpen, setIsOpen] = useState(false);

  const filterOptions = ['인기순', '가격 낮은 순', '함량 순', '가격 높은 순'];
  const [selectedFilter, setSelectedFilter] = useState<string>('인기순');

  const handleSelectFilter = (option: string) => {
    setSelectedFilter(option);
  };

  const {
    data: { data },
  } = useSuspenseQuery(
    productQueryOption.list({
      search: searchType === 'ai' ? undefined : keyword,
    }),
  );

  const { data: gptData, isLoading } = useQuery(
    productQueryOption.ai({ search: keyword, enabled: searchType === 'ai' }),
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {searchType === 'ai' && gptData && (
        <AISearchSection
          title={gptData.data.title}
          description={gptData.data.description}
        />
      )}
      <section className={styles.mainContainer}>
        <div className={styles.subBanner}>
          <div>총 {data.length}개</div>
          {/* {searchType === 'default' && (
            <ButtonText>
              연관도 순
              <ArrowDrop />
            </ButtonText>
          )}
          {searchType === 'ai' && (
            <div>
              <ButtonText>
                전체 연령대
                <ArrowDrop />
              </ButtonText>
              <ButtonText onClick={() => setIsOpen(true)}>
                {selectedFilter}
                <ArrowDrop />
              </ButtonText>
            </div>
          )} */}
        </div>
        {data.length === 0 ? (
          <SearchFallback />
        ) : (
          <div className={styles.products}>
            {data.map(({ id, imageUrl, description, name, price }) => (
              <div key={id} className={styles.maxWidthBox}>
                <Card
                  id={id}
                  imageUrl={imageUrl}
                  company={description}
                  name={name}
                  price={price}
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <BottomSheet.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          <section className={bottomStyles.container}>
            <header className={bottomStyles.title}>
              <BottomSheet.Title asChild>
                <h4>연령/성별 필터</h4>
              </BottomSheet.Title>
            </header>
            <div className={bottomStyles.contents}>
              {filterOptions.map((option) => (
                <BottomSheet.Close key={option}>
                  <div
                    className={`${bottomStyles.option} ${
                      selectedFilter === option
                        ? bottomStyles.optionVariants.selected
                        : bottomStyles.optionVariants.default
                    }`}
                    onClick={() => handleSelectFilter(option)}
                  >
                    <span>{option}</span>
                    {selectedFilter === option && <Check />}
                  </div>
                </BottomSheet.Close>
              ))}
            </div>
          </section>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </>
  );
};
