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

export const CategoryResultPage = () => {
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
          />
          <div className={styles.separator} />
        </div>
      }
    >
      <div>
        <div className={styles.productFilterContainer}>
          <div>
            <div>카테고리</div>
            {/* chip 컨테이너 */}
            <div>
              <Chip shape="rect" color="default">
                빈혈
              </Chip>
            </div>
          </div>
          <div>관련성분</div>
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
            <Card key={mockProduct.name} {...mockProduct} width={180} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
