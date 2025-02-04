import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart, Check } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { ButtonText } from '@/ui/button-text';
import { Card } from '@/ui/card/card';
import { Chip } from '@/ui/chip';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import * as bottomStyles from './bottomSheet.css';
import * as styles from './style.css';

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const navigate = useNavigate();
  const { searchType } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<string>('인기순');
  const filterOptions = ['인기순', '가격 낮은 순', '함량 순', '가격 높은 순'];
  const handleSelectFilter = (option: string) => {
    setSelectedFilter(option);
  };

  return (
    <PageLayout
      header={
        <AppBar
          left={<ArrowLeft onClick={() => navigate(-1)} />}
          right={<Cart />}
          variant="page"
        >
          <div className={styles.searchContainer}>
            <SearchField
              hasResetButton
              placeholder="건강 불편 증상을 검색해 보세요"
              value={keyword}
            />
          </div>
        </AppBar>
      }
    >
      {searchType === 'ai' && (
        <section className={styles.subContainer}>
          <div className={styles.tabTitle}>피곤함에 좋은 제품 결과</div>
          <div className={styles.tabChip}>
            <ButtonText style={{ color: 'black' }}>
              관련성분 <ArrowDrop />
            </ButtonText>
            <Chip
              shape="pill"
              borderColor="grey100"
              color="grey500"
              typography="body_3_14_r"
            >
              콜라겐
            </Chip>
            <Chip
              shape="pill"
              borderColor="grey100"
              color="grey500"
              typography="body_3_14_r"
            >
              콜라겐
            </Chip>
          </div>
        </section>
      )}
      <section className={styles.mainContainer}>
        <div className={styles.subBanner}>
          <div>총 32개</div>
          {searchType === 'default' && (
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
          )}
        </div>
        <div className={styles.products}>
          {MOCK_PRODUCT_LIST.map((mockProduct) => (
            <div key={mockProduct.id} className={styles.maxWidthBox}>
              <Card {...mockProduct} />
            </div>
          ))}
        </div>
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
    </PageLayout>
  );
};
