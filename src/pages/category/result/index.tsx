import { Suspense, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { productQueryOption } from '@/apis/query/product';
import { ArrowDrop, ArrowLeft } from '@/assets';
import { CartButton } from '@/components/cart-botton';
import { FilterBottonSheet } from '@/components/filter-bottom-sheet';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { SearchFallback } from '@/components/search-fallback';
import { CATEGORY_LIST, CategoryId } from '@/constants/category';
import { INGREDIENT_MAP } from '@/constants/ingredient';
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

//TODO 검색 결과 없을 시 Fallback 추가 필요
export const CategoryResultPage = () => {
  const { categoryId = '' } = useParams();

  if (!categoryId) {
    throw new Error('잘못된 카테고리 아이디 입니다');
  }

  return (
    <LocalErrorBoundary>
      <Suspense>
        <CategoryResultPageInner categoryId={categoryId} />
      </Suspense>
    </LocalErrorBoundary>
  );
};

type CategoryResultPageInnerProps = {
  categoryId: string;
};

export const CategoryResultPageInner = (
  props: CategoryResultPageInnerProps,
) => {
  const { categoryId } = props;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [searchParams, setSearchParams] = useSearchParams();
  const ingredientIdList = searchParams.getAll('ingredient');

  const onClickCategory = (id: number) => () => {
    navigate(`/category/${id}`);
  };

  const {
    data: { data: productList },
  } = useSuspenseQuery(
    productQueryOption.list({
      categoryIds: [Number(categoryId)],
      ingredientIds: ingredientIdList.map(Number),
    }),
  );

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
            right={<CartButton />}
            variant="page"
          />
          <div className={styles.separator} />
        </div>
      }
      className={styles.centerStack}
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
        </ProductFilterList>
      </div>
      <div className={styles.subBanner}>
        <div>총 {productList.length}개</div>
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
      {productList.length === 0 ? (
        <SearchFallback />
      ) : (
        <div className={styles.gallery}>
          {productList.map(({ id, name, description, imageUrl, price }) => (
            <Card
              key={id}
              id={id}
              name={name}
              company={description}
              imageUrl={imageUrl}
              price={price}
            />
          ))}
        </div>
      )}
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
