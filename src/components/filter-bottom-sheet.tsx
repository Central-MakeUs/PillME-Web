import { useState } from 'react';
import { Delete } from '@/assets';
import { ResetIcon } from '@/assets/ResetIcon';
import {
  CATEGORY_LIST,
  CATEGORY_TITLE_MAP,
  CATEGORY_TYPE,
  Category,
  CategoryId,
} from '@/constants/category';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import { Spacer } from '@/ui/spacer/spacer';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import { entries } from '@/utils/entries';
import { values } from '@/utils/values';
import { INGREDIENT_MAP } from '../constants/ingredient';
import * as styles from './filter-bottom-sheet.css';

type FilterBottomSheetProps = {
  open: boolean;
  onOpenChange: VoidFunction;
  onConfirm?: ({
    selectedCategory,
    selectedIngredientList,
  }: {
    selectedCategory: number;
    selectedIngredientList: number[];
  }) => void;
  initialCategory?: number;
  initialIngredientList?: number[];
};

const groupData = values(CATEGORY_LIST).reduce<
  Record<CATEGORY_TYPE, Category[]>
>(
  (result, item) => {
    const { type } = item;
    return {
      ...result,
      [type]: [...(result[type] || []), item],
    };
  },
  {} as Record<CATEGORY_TYPE, Category[]>,
);

export const FilterBottonSheet = (props: FilterBottomSheetProps) => {
  const {
    open,
    onOpenChange,
    onConfirm,
    initialCategory = null,
    initialIngredientList = [],
  } = props;

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    initialCategory,
  );
  const [selectedIngredientList, setSelectedIngredientList] = useState<
    number[]
  >(initialIngredientList);
  const [currentTab, setCurrentTab] = useState('category');

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const onClickCategory = (catogoryId: number) => () => {
    if (isSelectedCategory(catogoryId)) {
      setSelectedCategoryId(null);
      setCurrentTab('category');
      setSelectedIngredientList([]);
      return;
    }

    setSelectedCategoryId(catogoryId);
  };

  const onClickIngredient = (ingredientId: number) => () => {
    if (isSelectedIngredient(ingredientId)) {
      const nextSelectedIngredientList = selectedIngredientList.filter(
        (selectediIngredientId) => selectediIngredientId !== ingredientId,
      );

      setSelectedIngredientList((prev) => [
        ...prev.filter(
          (selectediIngredientId) => selectediIngredientId !== ingredientId,
        ),
      ]);
      if (nextSelectedIngredientList.length === 0) {
        setCurrentTab('category');
      }
      return;
    }

    setSelectedIngredientList((prev) => [...prev, ingredientId]);
  };

  const isSelectedCategory = (categoryId: number) =>
    selectedCategoryId === categoryId;

  const isSelectedIngredient = (ingredientId: number) =>
    selectedIngredientList.find(
      (selectediIngredientId) => selectediIngredientId === ingredientId,
    );

  const onClickResetButton = () => {
    setSelectedCategoryId(initialCategory);
    setSelectedIngredientList(initialIngredientList);
  };

  const onClickSaveButton = () => {
    if (!selectedCategoryId) {
      return;
    }

    onConfirm?.({
      selectedCategory: selectedCategoryId,
      selectedIngredientList: selectedIngredientList,
    });
    onOpenChange();
  };

  const ingredientList = selectedCategoryId
    ? CATEGORY_LIST[selectedCategoryId as CategoryId].ingredentIdList
    : [];

  const showIngredientTab = ingredientList.length !== 0;

  return (
    <BottomSheet.Root open={open} onOpenChange={onOpenChange}>
      <BottomSheet.Overlay />
      <BottomSheet.Content className={styles.container}>
        <BottomSheet.Handle />
        <Spacer size={6} />
        <BottomSheet.Title className={styles.bottomSheetTitle}>
          제품 필터
        </BottomSheet.Title>
        <Spacer size={20} />
        <Tab value={currentTab} onValueChange={handleTabChange}>
          <TabLabel label="카테고리" value="category" />
          {showIngredientTab && (
            <TabLabel label="관련성분" value="ingredient" />
          )}
          <Spacer size={16} />
          <TabContent value="category" className={styles.TabContent}>
            <div className={styles.categoryContainer}>
              {entries(groupData).map(([categoryType, categortList]) => (
                <div
                  className={styles.categoryListContainer}
                  key={categoryType}
                >
                  <h6 className={styles.categoryListTitle}>
                    {CATEGORY_TITLE_MAP[categoryType]}
                  </h6>
                  <div className={styles.categoryList}>
                    {categortList.map(({ name, id }) => (
                      <Chip
                        shape="rect"
                        key={name}
                        borderColor={
                          isSelectedCategory(id) ? 'mainblue500' : 'grey200'
                        }
                        color={
                          isSelectedCategory(id) ? 'mainblue500' : 'grey500'
                        }
                        backgroundColor={
                          isSelectedCategory(id) ? 'blue100' : 'white'
                        }
                        onClick={onClickCategory(id)}
                      >
                        {name}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabContent>
          <TabContent value="ingredient">
            <div className={styles.categoryContainer}>
              {ingredientList.map((id) => (
                <div className={styles.categoryList} key={id}>
                  <Chip
                    shape="pill"
                    key={id}
                    borderColor={
                      isSelectedIngredient(id) ? 'mainblue500' : 'grey200'
                    }
                    color={isSelectedIngredient(id) ? 'mainblue500' : 'grey500'}
                    backgroundColor={
                      isSelectedIngredient(id) ? 'blue100' : 'white'
                    }
                    onClick={onClickIngredient(id)}
                  >
                    {INGREDIENT_MAP[id as CategoryId].name}
                    {isSelectedIngredient(id) && <Delete />}
                  </Chip>
                </div>
              ))}
            </div>
          </TabContent>
        </Tab>
        <div className={styles.fixedBottom}>
          <div className={styles.selectedTagContainer}>
            {selectedCategoryId && (
              <ButtonText
                className={styles.selectedTag}
                onClick={onClickCategory(selectedCategoryId)}
              >
                {CATEGORY_LIST[selectedCategoryId as CategoryId].name}
                <Delete />
              </ButtonText>
            )}
            {selectedIngredientList.map((id) => (
              <ButtonText
                className={styles.selectedTag}
                key={id}
                onClick={onClickIngredient(id)}
              >
                {INGREDIENT_MAP[id as CategoryId].name}
                <Delete />
              </ButtonText>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <Button
              size="large"
              variant="secondary"
              className={styles.button}
              left={<ResetIcon />}
              onClick={onClickResetButton}
            >
              초기화
            </Button>
            <Button size="large" onClick={onClickSaveButton}>
              완료
            </Button>
          </div>
        </div>
      </BottomSheet.Content>
    </BottomSheet.Root>
  );
};
