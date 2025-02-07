import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { HorizontalCard } from '@/ui/card/horizontal-card';
import { Checkbox } from '@/ui/check-box/check-box';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from './page.css';

const MOCK_TAG_LIST = [
  { name: '혈압', type: 'category' },
  { name: '루테인', type: 'ingredient' },
] satisfies Array<{ name: string; type: 'category' | 'ingredient' }>;

export const CartPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [productList, setProductList] = useState(
    MOCK_PRODUCT_LIST.map((product) => ({
      ...product,
      checked: true,
    })),
  );

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
            장바구니
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <div className={styles.container}>
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
          {productList.map(({ id, checked, ...rest }) => (
            <HorizontalCard
              {...rest}
              key={id}
              label={
                <Checkbox
                  id={String(id)}
                  checked={checked}
                  onChange={toggleCheck}
                  className={styles.checkbox}
                />
              }
              tagList={MOCK_TAG_LIST}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button size="large">총 4건 구매 링크 복사하기</Button>
      </div>
    </PageLayout>
  );
};
