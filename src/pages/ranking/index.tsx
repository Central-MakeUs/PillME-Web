import { useNavigate } from 'react-router';
import { ArrowDrop, ArrowLeft } from '@/assets';
import { CartButton } from '@/components/cart-botton';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { ButtonText } from '@/ui/button-text';
import { Card } from '@/ui/card/card';
import { Chip } from '@/ui/chip';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { ProductFilterLabel } from '@/ui/product-filter-list/product-filter-label';
import { ProductFilterList } from '@/ui/product-filter-list/product-filter-list';
import * as styles from './page.css';

const MOCK_FILTER_LIST = Array.from({ length: 6 }, () => '빈혈');

export const RankingPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <PageLayout
      header={
        <div>
          <AppBar
            left={
              <IconButton onClick={goBack}>
                <ArrowLeft />
              </IconButton>
            }
            right={<CartButton />}
            variant="page"
          >
            랭킹
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <div className={styles.productFilterList}>
        <ProductFilterList
          label={
            <ProductFilterLabel Icon={<ArrowDrop />}>
              카테고리
            </ProductFilterLabel>
          }
        >
          {MOCK_FILTER_LIST.map((filter, index) => (
            <Chip
              shape="rect"
              color="grey500"
              borderColor="grey200"
              key={index}
            >
              {filter}
            </Chip>
          ))}
        </ProductFilterList>
        <ProductFilterList
          label={
            <ProductFilterLabel Icon={<ArrowDrop />}>
              관련 성분
            </ProductFilterLabel>
          }
        >
          {MOCK_FILTER_LIST.map((filter, index) => (
            <Chip
              shape="pill"
              color="grey500"
              borderColor="grey200"
              key={index}
            >
              {filter}
            </Chip>
          ))}
        </ProductFilterList>
      </div>
      <div className={styles.subBanner}>
        <div>총 32개</div>
        <div className={styles.userFilterContainer}>
          <ButtonText>
            전체 연령대
            <ArrowDrop />
          </ButtonText>
        </div>
      </div>
      <div className={styles.gallery}>
        {MOCK_PRODUCT_LIST.map((mockProduct) => (
          <Card key={mockProduct.name} {...mockProduct} />
        ))}
      </div>
    </PageLayout>
  );
};
