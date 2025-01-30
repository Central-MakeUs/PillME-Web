import { useNavigate, useSearchParams } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { ButtonText } from '@/ui/button-text';
import { Card } from '@/ui/card/card';
import { PageLayout } from '@/ui/layout/page-layout';
import { SearchField } from '@/ui/search-field';
import * as styles from './style.css';

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const navigate = useNavigate();

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
      <section className={styles.mainContainer}>
        <div className={styles.subBanner}>
          <div>총 32개</div>
          <ButtonText>
            연관도 순
            <ArrowDrop />
          </ButtonText>
        </div>
        <div className={styles.products}>
          {MOCK_PRODUCT_LIST.map((mockProduct) => (
            <Card key={mockProduct.name} {...mockProduct} width={180} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
