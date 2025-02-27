import { ChangeEvent, Suspense, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { myMedicneQueryOption } from '@/apis/query/myMedicine';
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

  const {
    data: { data: medicneList },
  } = useSuspenseQuery(myMedicneQueryOption.list());

  const initialProductList = medicneList.map(({ product }) => ({
    ...product,
    checked: true,
  }));

  const [productList, setProductList] = useState(initialProductList);

  const toggleCheck = ({ target: { id } }: ChangeEvent) => {
    const updatedProductList = productList.map((product) =>
      product.id === Number(id)
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
        <p className={styles.totalCount}>총 2개</p>
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
          />
        </div>
        <Spacer size={30} />
        <div className={styles.list}>
          {productList.map(
            ({
              id,
              checked,
              imageUrl,
              description,
              name,
              healthConcerns,
              productIngredients,
            }) => (
              <HorizontalCard
                key={id}
                imageUrl={imageUrl}
                company={description}
                name={name}
                label={
                  <Checkbox
                    id={String(id)}
                    checked={checked}
                    onChange={toggleCheck}
                    className={styles.checkbox}
                  />
                }
              >
                {(healthConcerns.length !== 0 ||
                  productIngredients.length !== 0) && (
                  <div className={styles.chipContainer}>
                    {healthConcerns.map(({ id, name }) => (
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
                    {productIngredients.map(({ ingredientName }) => (
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
