import { useNavigate } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart } from '@/assets';
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

export const RecommendPage = () => {
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
            // TODO 카트 페이지 라우팅 추가 필요
            right={
              <IconButton>
                <Cart />
              </IconButton>
            }
            variant="page"
          >
            추천 건강기능식품
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <div className={styles.productFilterList}>
        <ProductFilterList
          label={
            <ProductFilterLabel Icon={<ArrowDrop />}>
              추천성분
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
          <ButtonText>
            연관도 순
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
