import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Cart, Check, Plus } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import { Dialog } from '@/ui/dialog';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { CustomToastProvider, useShowCustomToast } from '@/ui/toast/toast';
import { MOCK_PRODUCT_LIST } from '../home/mock-product';
import { IngredientCard } from './components/ingredient-card';
import { IngredientChart } from './components/ingredient-chart';
import * as styles from './style.css';

export const ProductPage = () => {
  const navigate = useNavigate();
  const showCustomToast = useShowCustomToast();
  const [isAddedToPillbox, setIsAddedToPillbox] = useState(false);
  const { productId } = useParams();
  const product = MOCK_PRODUCT_LIST.find((p) => p.id === Number(productId));

  if (!product) return <p>상품을 찾을 수 없습니다.</p>; // not-found 페이지로 교체

  const handlePillboxClick = () => {
    setIsAddedToPillbox(true);
    showCustomToast('내 약통에 추가 되었어요', 'success', '/pillbox/manage');
  };
  const handleRemoveFromPillbox = () => {
    setIsAddedToPillbox(false);
    showCustomToast('내 약통에서 삭제되었어요', 'remove', '/pillbox/manage');
  };

  return (
    <PageLayout
      header={
        <div>
          <AppBar
            left={<ArrowLeft onClick={() => navigate(-1)} />}
            right={<Cart />}
            variant="page"
          />
          <div className={styles.separator} />
        </div>
      }
    >
      <section className={styles.productContainer}>
        <img src={product.imageUrl} className={styles.productImg} alt="제품" />
        <div className={styles.info}>
          <div className={styles.subTitle}>웰릿</div>
          <div className={styles.title}>
            윌릿나토킨NATOKIN윌릿나토킨NATOKIN윌릿나토킨NATOKIN
          </div>
          <div className={styles.price}>
            77,000 <span className={styles.won}>원</span>
          </div>
          <div className={styles.tags}>
            <Chip shape="pill" color="blue400" backgroundColor="blue200">
              혈압
            </Chip>
            <Chip shape="pill" color="grey500" backgroundColor="grey200">
              빈혈
            </Chip>
            <Chip shape="pill" color="grey500" backgroundColor="grey200">
              루테인
            </Chip>
          </div>
        </div>
        <CustomToastProvider />
        <div className={styles.pillButtonBox}>
          {!isAddedToPillbox && (
            <Button
              size="small"
              variant="third"
              left={<Plus />}
              className={styles.pillButton}
              onClick={handlePillboxClick}
            >
              내 약통
            </Button>
          )}
          {isAddedToPillbox && (
            <Dialog
              action="default"
              title="내 약통에서 제거하시겠어요?"
              description="제거하면 다시 추가해야 합니다."
              leftButtonText="취소"
              rightButtonText="제거"
              onConfirm={handleRemoveFromPillbox}
              trigger={
                <Button
                  size="small"
                  variant="third"
                  left={<Check />}
                  className={styles.pillButton}
                  onClick={handlePillboxClick}
                >
                  내 약통
                </Button>
              }
            />
          )}
        </div>
      </section>
      <Spacer size={10} className={styles.spaceColor} />
      <section className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.sectionTitle}>제품 성분 분포도</div>
          <ButtonText
            icon
            onClick={() => navigate(`/product/${product.id}/ingredient`)}
          >
            성분 전체보기
          </ButtonText>
        </div>
        <div className={styles.chartBox}>
          <IngredientChart />
        </div>
      </section>
      <Spacer size={10} className={styles.spaceColor} />
      <section className={styles.compareContainer}>
        <div className={styles.sectionTitle}>
          제품의 총 19개의 성분 중<br />
          필미님은 4개를 충족해요
        </div>
        <div className={styles.ingredientCards}>
          {/* number props 추가 */}
          <IngredientCard status="충족" />
          <IngredientCard status="부족" />
          <IngredientCard status="과다" />
        </div>
      </section>
      <div className={styles.buttonWrapper}>
        <Button size="large" variant="secondary">
          구매하러 가기
        </Button>
        {/* 토스트 알럿 추가 */}
        <Button size="large" variant="primary">
          장바구니 담기
        </Button>
      </div>
    </PageLayout>
  );
};
