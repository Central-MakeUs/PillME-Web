import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { ArrowDrop, ArrowLeft, Cart } from '@/assets';
import { FilterBottonSheet } from '@/components/filter-bottom-sheet';
import { CATEGORY_LIST, CategoryId } from '@/constants/category';
import { INGREDIENT_MAP } from '@/constants/ingredient';
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

  const { categoryId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const ingredientIdList = searchParams.getAll('ingredient');

  const onClickCategory = (id: number) => () => {
    navigate(`/category/${id}`);
  };

  const onClickIngredient = (id: number) => () => {
    const newSearchParams = new URLSearchParams(searchParams);

    // 이미 선택된 ingredient인지 확인
    const isSelected = ingredientIdList.includes(String(id));

    // 선택된 경우 제거, 선택되지 않은 경우 추가
    if (isSelected) {
      // 선택 해제: 기존 파라미터들을 전부 삭제하고 선택된 id를 제외한 나머지만 다시 추가
      newSearchParams.delete('ingredient');
      ingredientIdList
        .filter((ingredientId) => ingredientId !== String(id))
        .forEach((ingredientId) => {
          newSearchParams.append('ingredient', ingredientId);
        });
    } else {
      // 선택: 새로운 id 추가
      newSearchParams.append('ingredient', String(id));
    }
    setSearchParams(newSearchParams);
  };

  const [open, setIsOpen] = useState(false);

  if (!categoryId) {
    throw new Error('잘못된 카테고리 아이디 입니다');
  }

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
              onClick={() => setIsOpen(true)}
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
              onClick={() => setIsOpen(true)}
            >
              관련 성분
            </ProductFilterLabel>
          }
        >
          {CATEGORY_LIST[Number(categoryId) as CategoryId].ingredentIdList
            .sort((a, b) => {
              // categoryId와 일치하는 항목이 앞으로 오도록
              if (ingredientIdList.includes(String(a))) return -1;
              if (ingredientIdList.includes(String(b))) return 1;
              return 0;
            })
            .map((ingredientId) => (
              <Chip
                shape="pill"
                color={
                  ingredientIdList.includes(String(ingredientId))
                    ? 'mainblue500'
                    : 'grey500'
                }
                borderColor={
                  ingredientIdList.includes(String(ingredientId))
                    ? 'mainblue500'
                    : 'grey200'
                }
                backgroundColor={
                  ingredientIdList.includes(String(ingredientId))
                    ? 'blue100'
                    : 'white'
                }
                key={ingredientId}
                onClick={onClickIngredient(ingredientId)}
              >
                {
                  INGREDIENT_MAP[ingredientId as keyof typeof INGREDIENT_MAP]
                    .name
                }
              </Chip>
            ))}
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
      {open && (
        <FilterBottonSheet
          open={open}
          onOpenChange={() => setIsOpen(false)}
          initialCategory={Number(categoryId)}
          initialIngredientList={ingredientIdList.map(Number)}
          onConfirm={({ selectedCategory, selectedIngredientList }) => {
            if (selectedIngredientList.length === 0) {
              navigate(`/category/${selectedCategory}`);
              return;
            }

            const queryString = selectedIngredientList
              .map((id) => `ingredient=${id}`)
              .join('&');

            navigate(`/category/${selectedCategory}?${queryString}`);
          }}
        />
      )}
    </PageLayout>
  );
};
