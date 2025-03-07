import { Suspense, useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router';
import { addCartAPI } from '@/apis/mutation/cart';
import {
  addMyMedicineAPI,
  deleteMyMedicineAPI,
} from '@/apis/mutation/myMedicine';
import { cartQueryKeys } from '@/apis/query/cart';
import { myMedicineQueryKeys } from '@/apis/query/myMedicine';
import { productQueryOption } from '@/apis/query/product';
import { ArrowLeft, Check, Plus } from '@/assets';
import { CartButton } from '@/components/cart-botton';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
// import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import { Dialog } from '@/ui/dialog';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import { isLogin } from '@/utils/isLogin';
import { Loading } from '../loading';
import { AnalysisSection } from './components/analysis-section';
import { IngredientChart } from './components/ingredient-chart';
import * as styles from './page.css';

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <LocalErrorBoundary>
      <Suspense fallback={<Loading />}>
        <ProductPageInner productId={Number(productId)} />
      </Suspense>
    </LocalErrorBoundary>
  );
};

//TODO 데이터 시각화 관련 api 연동 필요
export const ProductPageInner = ({ productId }: { productId: number }) => {
  const navigate = useNavigate();
  const showCustomToast = useShowCustomToast();
  const [isAddedToPillbox, setIsAddedToPillbox] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: { data: product },
  } = useSuspenseQuery(productQueryOption.detail({ productId }));

  const { mutate: addaddMyMedicineMutate } = useMutation({
    mutationFn: addMyMedicineAPI,
    onSuccess: async () => {
      await queryClient.resetQueries({
        queryKey: [...myMedicineQueryKeys.lists()],
      });
      setIsAddedToPillbox(true);
      showCustomToast('내 약통에 추가 되었어요', 'success', '/pillbox/manage');
    },
  });

  const { mutate: deleteMyMedicineMutate } = useMutation({
    mutationFn: deleteMyMedicineAPI,
    onSuccess: async () => {
      await queryClient.resetQueries({
        queryKey: [...myMedicineQueryKeys.lists()],
      });
      setIsAddedToPillbox(false);
      showCustomToast('내 약통에서 삭제되었어요', 'remove', '/pillbox/manage');
    },
  });

  const { mutate: addCartMutate } = useMutation({
    mutationFn: addCartAPI,
    onSuccess: async () => {
      await queryClient.resetQueries({
        queryKey: [...cartQueryKeys.lists()],
      });
      showCustomToast('장바구니에 추가되었어요', 'success', '/cart');
    },
  });

  const handlePillboxClick = () => {
    addaddMyMedicineMutate({ productId: product.id });
  };
  const handleRemoveFromPillbox = () => {
    deleteMyMedicineMutate({ myMedicineIds: [product.id] });
  };

  const onClickAddCartButton = (productId: number) => () =>
    addCartMutate({ productId });

  return (
    <PageLayout
      header={
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <AppBar
            left={<ArrowLeft onClick={() => navigate(-1)} />}
            right={<CartButton />}
            variant="page"
          />
          <div className={styles.separator} />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <section className={styles.productContainer}>
          <img
            src={product.imageUrl}
            className={styles.productImg}
            alt="제품"
          />
          <div className={styles.info}>
            <div className={styles.subTitle}>{product.description}</div>
            <div className={styles.title}>{product.name}</div>
            <div className={styles.price}>
              {product.price.toLocaleString()}
              <span className={styles.won}>원</span>
            </div>
            <div className={styles.tags}>
              {product.healthConcerns.slice(0, 1).map(({ id, name }) => (
                <Chip
                  shape="pill"
                  color="blue400"
                  backgroundColor="blue200"
                  key={id}
                >
                  {name}
                </Chip>
              ))}
              {product.productIngredients
                .slice(0, 2)
                .map(({ ingredientName }) => (
                  <Chip
                    shape="pill"
                    color="grey500"
                    backgroundColor="grey200"
                    key={ingredientName}
                  >
                    {ingredientName}
                  </Chip>
                ))}
            </div>
          </div>
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
                    onClick={handleRemoveFromPillbox}
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
            {/* ToDo: api 나오면 성분 전체보기 그래프 연결 */}
            {/* <ButtonText
              icon
              onClick={() => navigate(`/product/${product.id}/ingredient`)}
            >
              성분 전체보기
            </ButtonText> */}
          </div>
          <div className={styles.chartBox}>
            <IngredientChart productId={productId} />
          </div>
        </section>
        {isLogin() && (
          <Suspense>
            <AnalysisSection productId={productId} />
          </Suspense>
        )}

        <div className={styles.buttonWrapper}>
          {/* TODO 구매하러 가기 기능 추가 */}
          <Button size="large" variant="secondary">
            구매하러 가기
          </Button>
          <Button
            size="large"
            variant="primary"
            onClick={onClickAddCartButton(product.id)}
          >
            장바구니 담기
          </Button>
        </div>
      </motion.div>
    </PageLayout>
  );
};
