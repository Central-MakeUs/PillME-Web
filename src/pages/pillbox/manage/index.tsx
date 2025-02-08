import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
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

const MOCK_TAG_LIST = [
  { name: '혈압', type: 'category' },
  { name: '루테인', type: 'ingredient' },
] satisfies Array<{ name: string; type: 'category' | 'ingredient' }>;

export const PillboxManagePage = () => {
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
            >
              {MOCK_TAG_LIST && (
                <div className={styles.chipContainer}>
                  {MOCK_TAG_LIST.map(({ name, type }, index) => (
                    <Chip
                      shape="tag"
                      backgroundColor={
                        type === 'category' ? 'blue200' : 'grey200'
                      }
                      color={type === 'category' ? 'blue400' : 'grey500'}
                      typography="body_4_12_b"
                      key={index}
                    >
                      {name}
                    </Chip>
                  ))}
                </div>
              )}
            </HorizontalCard>
          ))}
          <Button size="large" variant="third" className={styles.button}>
            복용 제품 추가
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
