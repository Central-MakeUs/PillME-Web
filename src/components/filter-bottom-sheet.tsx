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

type Tag = {
  id: number;
  name: string;
};

type FilterBottomSheetProps = {
  open: boolean;
  onOpenChange: VoidFunction;
  onConfirm?: ({
    selectedCategoryList,
    selectedIngredientList,
  }: {
    selectedCategoryList: number[];
    selectedIngredientList: number[];
  }) => void;
  initialCategory?: Tag;
  initialIngredientList?: Tag[];
  initialTab: string;
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
  const { open, onOpenChange, onConfirm, initialTab = 'category' } = props;

  const [selectedCategory, setSelectedCategory] = useState<Tag | null>();
  const [selectedIngredientList, setSelectedIngredientList] = useState<Tag[]>(
    [],
  );
  const [currentTab, setCurrentTab] = useState(initialTab);

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const onClickCategory = (item: Tag) => () => {
    if (selectedCategory?.id === item.id) {
      setSelectedCategory(null);
      return;
    }

    setSelectedCategory(item);
  };

  const onClickIngredient = (item: Tag) => () => {
    if (
      selectedIngredientList.find((ingredient) => ingredient.id === item.id)
    ) {
      setSelectedIngredientList((prev) => [
        ...prev.filter((ingredient) => ingredient.id !== item.id),
      ]);
      return;
    }

    setSelectedIngredientList((prev) => [...prev, { ...item }]);
  };

  const isSelectedCategory = (item: Tag) => selectedCategory?.id === item.id;

  const isSelectedIngredient = (item: Tag) =>
    selectedIngredientList.find((ingredient) => ingredient.id === item.id);

  const onClickResetButton = () => {
    setSelectedCategory(null);
    setSelectedIngredientList([]);
  };

  const onClickSaveButton = () => {
    const categoryIdList = selectedCategory ? [selectedCategory.id] : [];
    const ingredientIdList = selectedIngredientList.map(({ id }) => id);

    console.log(categoryIdList, ingredientIdList);

    onConfirm?.({
      selectedCategoryList: categoryIdList,
      selectedIngredientList: ingredientIdList,
    });
    onOpenChange();
  };

  const ingredientList = selectedCategory
    ? CATEGORY_LIST[selectedCategory.id as CategoryId].ingredentIdList
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
        <Tab defaultValue={currentTab} onValueChange={handleTabChange}>
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
                          isSelectedCategory({ id, name })
                            ? 'mainblue500'
                            : 'grey200'
                        }
                        color={
                          isSelectedCategory({ id, name })
                            ? 'mainblue500'
                            : 'grey500'
                        }
                        backgroundColor={
                          isSelectedCategory({ id, name }) ? 'blue100' : 'white'
                        }
                        onClick={onClickCategory({ id, name })}
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
                      isSelectedIngredient({
                        id,
                        name: INGREDIENT_MAP[id as CategoryId].name,
                      })
                        ? 'mainblue500'
                        : 'grey200'
                    }
                    color={
                      isSelectedIngredient({
                        id,
                        name: INGREDIENT_MAP[id as CategoryId].name,
                      })
                        ? 'mainblue500'
                        : 'grey500'
                    }
                    backgroundColor={
                      isSelectedIngredient({
                        id,
                        name: INGREDIENT_MAP[id as CategoryId].name,
                      })
                        ? 'blue100'
                        : 'white'
                    }
                    onClick={onClickIngredient({
                      id,
                      name: INGREDIENT_MAP[id as CategoryId].name,
                    })}
                  >
                    {INGREDIENT_MAP[id as CategoryId].name}
                    {isSelectedIngredient({
                      id,
                      name: INGREDIENT_MAP[id as CategoryId].name,
                    }) && <Delete />}
                  </Chip>
                </div>
              ))}
            </div>
          </TabContent>
        </Tab>
        <div className={styles.fixedBottom}>
          <div className={styles.selectedTagContainer}>
            {selectedCategory && (
              <ButtonText className={styles.selectedTag}>
                {selectedCategory.name}
                <Delete />
              </ButtonText>
            )}
            {selectedIngredientList.map((id) => (
              <ButtonText className={styles.selectedTag} key={id.id}>
                {INGREDIENT_MAP[id.id as CategoryId].name}
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
