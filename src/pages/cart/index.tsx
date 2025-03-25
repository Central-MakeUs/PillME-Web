import { ChangeEvent, Suspense, useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { deleteCartAPI } from '@/apis/mutation/cart';
import { cartQueryKeys, cartQueryOption } from '@/apis/query/cart';
import { GetCartAPIResponse } from '@/apis/types/cart';
import { ArrowLeft } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { copyClipBoard } from '@/libs/bridge/copyClipBoard';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { HorizontalCard } from '@/ui/card/horizontal-card';
import { Checkbox } from '@/ui/check-box/check-box';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import { Loading } from '../loading';
import { Fallback } from './components/Fallback';
import * as styles from './page.css';

export const CartPage = () => {
  return (
    <LocalErrorBoundary>
      <Suspense fallback={<Loading />}>
        <CartPageInner />
      </Suspense>
    </LocalErrorBoundary>
  );
};

const CartPageInner = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const showCustomToast = useShowCustomToast();

  const {
    data: { data: cartList },
  } = useSuspenseQuery(cartQueryOption.list());

  const initialProductList = cartList.map(({ product, cartId }) => ({
    ...product,
    checked: true,
    cartId,
  }));

  const [productList, setProductList] = useState(initialProductList);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteCartAPI,
    onSuccess: async () => {
      showCustomToast('장바구니에서 삭제되었어요', 'remove');
      await queryClient.invalidateQueries({
        queryKey: [...cartQueryKeys.lists()],
      });

      const checkedStateMap = new Map(
        productList.map((item) => [item.cartId, item.checked]),
      );

      const queryData = queryClient.getQueryData<GetCartAPIResponse>([
        ...cartQueryKeys.lists(),
      ]);

      if (!queryData?.data) {
        return;
      }
      // 최신 데이터로 productList 상태 업데이트 (체크 상태 유지)
      const updatedProductList = queryData.data.map(({ product, cartId }) => {
        // 기존 체크 상태가 있으면 유지, 없으면 기본값 true
        const isChecked = checkedStateMap.get(cartId) ?? true;

        return {
          cartId,
          ...product,
          checked: isChecked,
        };
      });

      setProductList(updatedProductList);
    },
    onError: async () => {
      showCustomToast('장바구니에서 삭제하지 못했어요', 'error');
    },
  });

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

  const deleteSelectedItemList = () => {
    const selectedItemIdList = productList
      .filter(({ checked }) => checked)
      .map(({ cartId }) => cartId);

    //FIX 장바구니에 같은 상품들이 있을 경우를 대비해서 중복 제거 처리, 추후 제거 필요
    mutate({ myMedicineIds: Array.from(new Set(selectedItemIdList)) });
  };

  const deleteItem = (id: number) => () => mutate({ myMedicineIds: [id] });

  const onClickPurchaseLinkCopyButton = () => {
    const checkedPurchaseLinkListString = productList
      .filter(({ checked }) => Boolean(checked))
      .map(({ purchaseLink }) => purchaseLink)
      .join('\n');

    copyClipBoard(checkedPurchaseLinkListString);
    showCustomToast('구매 링크가 복사되었어요', 'success');
  };

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
      className={styles.pageContainer}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        exit={{ opacity: 0, x: 50 }}
        className={styles.container}
      >
        {productList.length === 0 ? (
          <Fallback />
        ) : (
          <>
            <div className={styles.listHeader}>
              <h3 className={styles.pageSubTitle}>영양제 선택</h3>
              <Dialog
                trigger={
                  <button>
                    <ButtonText>선택 삭제</ButtonText>
                  </button>
                }
                title={
                  checkedCount === 0
                    ? '선택된 제품이 없어요'
                    : '제품을 장바구니에서 삭제할까요?'
                }
                description={
                  checkedCount === 0
                    ? '삭제할 제품을 선택해주세요'
                    : '제품을 삭제할 시 복용 약 성분 분석에 반영돼요'
                }
                action={checkedCount === 0 ? 'single' : 'default'}
                leftButtonText="취소"
                rightButtonText="삭제"
                onConfirm={
                  checkedCount === 0 ? undefined : deleteSelectedItemList
                }
              />
            </div>
            <Spacer size={18} />
            <div className={styles.listHeaderLeft}>
              <Checkbox
                checked={allChecked}
                id="all"
                onChange={toggleAllCheck}
              />
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
                    onClickDeletebutton={deleteItem(cartId)}
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
          </>
        )}
      </motion.div>
      {checkedCount !== 0 && (
        <div className={styles.buttonContainer}>
          <Button size="large" onClick={onClickPurchaseLinkCopyButton}>
            총 {checkedCount}건 구매 링크 복사하기
          </Button>
        </div>
      )}
    </PageLayout>
  );
};
