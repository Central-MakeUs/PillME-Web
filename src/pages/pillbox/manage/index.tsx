import { ChangeEvent, Suspense, useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { deleteMyMedicineAPI } from '@/apis/mutation/myMedicine';
import {
  myMedicineQueryKeys,
  myMedicneQueryOption,
} from '@/apis/query/myMedicine';
import { GetMyMedicineAPIResponse } from '@/apis/types/myMedicine';
import { ArrowLeft } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { HorizontalCard } from '@/ui/card/horizontal-card';
import { Chip } from '@/ui/chip';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import { Checkbox } from '../../../ui/check-box/check-box';
import * as styles from './page.css';

export const PillboxManagePage = () => {
  return (
    <LocalErrorBoundary>
      <Suspense>
        <PillboxManagePageInner />
      </Suspense>
    </LocalErrorBoundary>
  );
};

const PillboxManagePageInner = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goAddPillboxPage = () => navigate('/pillbox/new');

  const showCustomToast = useShowCustomToast();

  const {
    data: { data: medicneList },
  } = useSuspenseQuery(myMedicneQueryOption.list());

  const initialProductList = medicneList.map(({ product, myMedicineId }) => ({
    myMedicineId,
    ...product,
    checked: true,
  }));

  const [productList, setProductList] = useState(initialProductList);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteMyMedicineAPI,
    onSuccess: async () => {
      showCustomToast('내 약통에서 삭제되었어요', 'remove');
      await queryClient.invalidateQueries({
        queryKey: [...myMedicineQueryKeys.lists()],
      });

      const checkedStateMap = new Map(
        productList.map((item) => [item.myMedicineId, item.checked]),
      );

      const queryData = queryClient.getQueryData<GetMyMedicineAPIResponse>([
        ...myMedicineQueryKeys.lists(),
      ]);

      if (!queryData?.data) {
        return;
      }
      // 최신 데이터로 productList 상태 업데이트 (체크 상태 유지)
      const updatedProductList = queryData.data.map(
        ({ product, myMedicineId }) => {
          // 기존 체크 상태가 있으면 유지, 없으면 기본값 true
          const isChecked = checkedStateMap.get(myMedicineId) ?? true;

          return {
            myMedicineId,
            ...product,
            checked: isChecked,
          };
        },
      );

      setProductList(updatedProductList);
    },
  });

  const toggleCheck = ({ target: { id } }: ChangeEvent) => {
    const updatedProductList = productList.map((product) =>
      product.myMedicineId === Number(id)
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

  const deleteSelectedItemList = () => {
    const selectedItemIdList = productList
      .filter(({ checked }) => checked)
      .map(({ myMedicineId }) => myMedicineId);

    //FIX 장바구니에 같은 상품들이 있을 경우를 대비해서 중복 제거 처리, 추후 제거 필요
    mutate({ myMedicineIds: Array.from(new Set(selectedItemIdList)) });
  };

  const deleteItem = (id: number) => () => mutate({ myMedicineIds: [id] });

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
            variant="page"
          >
            내 약통 관리
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <div className={styles.container}>
        <p className={styles.totalCount}>총 {productList.length}개</p>
        <Spacer size={20} />
        <div className={styles.listHeader}>
          <div className={styles.listHeaderLeft}>
            <Checkbox checked={allChecked} id="all" onChange={toggleAllCheck} />
            <label className={styles.deleteAllLabel}>전체 선택</label>
          </div>
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
            onConfirm={deleteSelectedItemList}
          />
        </div>
        <Spacer size={30} />
        <div className={styles.list}>
          {productList.map(
            ({
              myMedicineId,
              checked,
              imageUrl,
              description,
              name,
              healthConcerns,
              productIngredients,
            }) => (
              <HorizontalCard
                key={myMedicineId}
                imageUrl={imageUrl}
                company={description}
                name={name}
                label={
                  <Checkbox
                    id={String(myMedicineId)}
                    checked={checked}
                    onChange={toggleCheck}
                    className={styles.checkbox}
                  />
                }
                onClickDeletebutton={deleteItem(myMedicineId)}
              >
                {/* TODO 현재 healthConcerns, productIngredients를 백엔드에서 내려주지 않아서 예외처리 추가 */}
                {((healthConcerns && healthConcerns?.length !== 0) ||
                  (productIngredients && productIngredients?.length !== 0)) && (
                  <div className={styles.chipContainer}>
                    {healthConcerns?.map(({ id, name }) => (
                      <Chip
                        shape="tag"
                        backgroundColor="blue200"
                        color="blue400"
                        typography="body_4_12_b"
                        key={id}
                      >
                        {name}
                      </Chip>
                    ))}
                    {productIngredients?.map(({ ingredientName }) => (
                      <Chip
                        shape="tag"
                        backgroundColor="grey200"
                        color="grey500"
                        typography="body_4_12_b"
                        key={ingredientName}
                      >
                        {ingredientName}
                      </Chip>
                    ))}
                  </div>
                )}
              </HorizontalCard>
            ),
          )}
          <Button
            size="large"
            variant="third"
            className={styles.button}
            onClick={goAddPillboxPage}
          >
            복용 제품 추가
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
