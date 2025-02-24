import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart } from '@/assets';
import { FilterBottonSheet } from '@/components/filter-bottom-sheet';
import { CATEGORY_LIST } from '@/constants/category';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { ButtonText } from '@/ui/button-text';
import { Card } from '@/ui/card/card';
import { Chip } from '@/ui/chip';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { ProductFilterLabel } from '@/ui/product-filter-list/product-filter-label';
import { ProductFilterList } from '@/ui/product-filter-list/product-filter-list';
import { values } from '@/utils/values';
import * as styles from './page.css';

const MOCK_FILTER_LIST = Array.from({ length: 6 }, () => '빈혈');

export const CategoryResultPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [initialTab, setInitialTab] = useState<string>('none');

  const { categoryId = '' } = useParams();

  if (!categoryId) {
    throw new Error('잘못된 카테고리 아이디 입니다');
  }

  const onClickCategory = (id: number) => () => {
    navigate(`/category/${id}`);
  };

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
      <div className={styles.productFilterList}>
        <ProductFilterList
          label={
            <ProductFilterLabel
              Icon={<ArrowDrop />}
              onClick={() => setInitialTab('category')}
            >
              카테고리
            </ProductFilterLabel>
          }
        >
          {values(CATEGORY_LIST)
            .sort((a, b) => {
              // categoryId와 일치하는 항목이 앞으로 오도록
              if (a.id === Number(categoryId)) return -1;
              if (b.id === Number(categoryId)) return 1;
              return 0;
            })
            .map(({ id, name }) => (
              <Chip
                shape="rect"
                color={id === Number(categoryId) ? 'mainblue500' : 'grey500'}
                borderColor={
                  id === Number(categoryId) ? 'mainblue500' : `grey200`
                }
                key={id}
                onClick={onClickCategory(id)}
              >
                {name}
              </Chip>
            ))}
        </ProductFilterList>
        <ProductFilterList
          label={
            <ProductFilterLabel
              Icon={<ArrowDrop />}
              onClick={() => setInitialTab('ingredient')}
            >
              관련 성분
            </ProductFilterLabel>
          }
        >
          {MOCK_FILTER_LIST.map((filter, index) => (
            <Chip
              shape="pill"
              color="grey500"
              borderColor="grey200"
              key={index}
            >
              {filter}
            </Chip>
          ))}
        </ProductFilterList>
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
          <Card key={mockProduct.name} {...mockProduct} />
        ))}
      </div>
      {/* TODO initialCategory, initialIngredient 추가 필요 */}
      {initialTab !== 'none' && (
        <FilterBottonSheet
          open={initialTab !== 'none'}
          initialTab={initialTab}
          onOpenChange={() => setInitialTab('none')}
        />
      )}
    </PageLayout>
  );
};
