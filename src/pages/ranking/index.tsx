import { useNavigate } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { ButtonText } from '@/ui/button-text';
import { Card } from '@/ui/card/card';
import { Chip } from '@/ui/chip';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import * as styles from './page.css';

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
            // TODO 카트 페이지 라우팅 추가 필요
            right={
              <IconButton>
                <Cart />
              </IconButton>
            }
            variant="page"
          >
            랭킹
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <div className={styles.productFilterList}>
        <div className={styles.productFilterContainer}>
          <div className={styles.filterTitle}>
            <p>카테고리</p>
            <ArrowDrop />
          </div>
          <div className={styles.filterList}>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="rect" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
          </div>
        </div>
        <div className={styles.productFilterContainer}>
          <div className={styles.filterTitle}>
            <p>관련 성분</p>
            <ArrowDrop />
          </div>
          <div className={styles.filterList}>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" borderColor="grey200">
              빈혈
            </Chip>
          </div>
        </div>
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
