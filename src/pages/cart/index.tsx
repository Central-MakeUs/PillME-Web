import { ChangeEvent, Suspense, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { cartQueryOption } from '@/apis/query/cart';
import { ArrowLeft } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { HorizontalCard } from '@/ui/card/horizontal-card';
import { Checkbox } from '@/ui/check-box/check-box';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { name } from '../userinfo/schema';
import * as styles from './page.css';

export const CartPage = () => {
  return (
    <LocalErrorBoundary>
      <Suspense>
        <CartPageInner />
      </Suspense>
    </LocalErrorBoundary>
  );
};

const CartPageInner = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const {
    data: { data: cartList },
  } = useSuspenseQuery(cartQueryOption.list());

  const initialProductList = cartList.map(({ product, cartId }) => ({
    ...product,
    checked: true,
    cartId,
  }));

  const [productList, setProductList] = useState(initialProductList);

  const toggleCheck = ({ target: { id } }: ChangeEvent) => {
    const updatedProductList = productList.map((product) =>
      product.cartId === Number(id)
        ? { ...product, checked: !product.checked }
        : product,
    );

    setProductList(updatedProductList);
  };

  const toggleAllCheck = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setProductList(productList.map((product) => ({ ...product, checked })));
  };

  const allChecked = productList.every(({ checked }) => Boolean(checked));

  const checkedCount = productList.filter(({ checked }) =>
    Boolean(checked),
  ).length;

  return (
    <PageLayout
      header={
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          exit={{ opacity: 0, x: 50 }}
        >
          <AppBar
            left={
              <IconButton onClick={goBack}>
                <ArrowLeft />
              </IconButton>
            }
            variant="page"
          >
            장바구니
          </AppBar>
          <div className={styles.separator} />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        exit={{ opacity: 0, x: 50 }}
        className={styles.container}
      >
        <div className={styles.listHeader}>
          <h3 className={styles.pageSubTitle}>영양제 선택</h3>
          <Dialog
            trigger={
              <button>
                <ButtonText>선택 삭제</ButtonText>
              </button>
            }
            title="제품을 내 약통에서 삭제할까요?"
            description="제품을 삭제할 시 복용 약 성분 분석에 반영돼요"
            action="default"
            leftButtonText="취소"
            rightButtonText="삭제"
          />
        </div>
        <Spacer size={18} />
        <div className={styles.listHeaderLeft}>
          <Checkbox checked={allChecked} id="all" onChange={toggleAllCheck} />
          <label className={styles.deleteAllLabel}>전체 선택</label>
        </div>
        <Spacer size={18} />
        <div className={styles.list}>
          {/* TODO x 버튼 핸들러는 추후 추가 예정 */}
          {productList.map(
            ({ checked, cartId, description, imageUrl, price, name }) => (
              <HorizontalCard
                key={cartId}
                label={
                  <Checkbox
                    id={String(cartId)}
                    checked={checked}
                    onChange={toggleCheck}
                    className={styles.checkbox}
                  />
                }
                company={description}
                imageUrl={imageUrl}
                name={name}
              >
                <p className={styles.price}>
                  <span className={styles.priceNumber}>
                    {Number(price).toLocaleString()}
                  </span>
                  원
                </p>
              </HorizontalCard>
            ),
          )}
        </div>
      </motion.div>
      {checkedCount !== 0 && (
        <div className={styles.buttonContainer}>
          <Button size="large">총 {checkedCount}건 구매 링크 복사하기</Button>
        </div>
      )}
    </PageLayout>
  );
};
