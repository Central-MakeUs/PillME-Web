import { useState } from 'react';
import { Delete } from '@/assets';
import { ResetIcon } from '@/assets/ResetIcon';
import { CATEGORY_LIST } from '@/pages/category/category';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { Chip } from '@/ui/chip';
import { Spacer } from '@/ui/spacer/spacer';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import * as styles from './filter-bottom-sheet.css';
type Tag = {
  id: string;
  name: string;
};

type FilterBottomSheetProps = {
  open: boolean;
  onOpenChange: VoidFunction;
  onConfirm?: ({
    selectedCategoryList,
    selectedIngredientList,
  }: {
    selectedCategoryList: string[];
    selectedIngredientList: string[];
  }) => void;
  initialCategoryList?: Tag[];
  initialIngredientList?: Tag[];
};

export const FilterBottonSheet = (props: FilterBottomSheetProps) => {
  const { open, onOpenChange, onConfirm } = props;

  const [selectedCategoryList, setSelectedCategoryList] = useState<Tag[]>([]);
  const [selectedIngredientList, setSelectedIngredientList] = useState<Tag[]>(
    [],
  );
  const [currentTab, setCurrentTab] = useState('category');

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const showIngredientTab = selectedCategoryList.length !== 0;

  const onClickCategory = (item: Tag) => () => {
    if (selectedCategoryList.find((category) => category.id === item.id)) {
      setSelectedCategoryList((prev) => [
        ...prev.filter((category) => category.id !== item.id),
      ]);
      return;
    }

    setSelectedCategoryList((prev) => [...prev, { ...item }]);
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

  const isSelectedCategory = (item: Tag) =>
    selectedCategoryList.find((category) => category.id === item.id);

  const isSelectedIngredient = (item: Tag) =>
    selectedIngredientList.find((ingredient) => ingredient.id === item.id);

  const onClickResetButton = () => {
    setSelectedCategoryList([]);
    setSelectedIngredientList([]);
  };

  const onClickSaveButton = () => {
    const categoryIdList = selectedCategoryList.map(({ id }) => id);
    const ingredientIdList = selectedIngredientList.map(({ id }) => id);

    console.log(categoryIdList, ingredientIdList);

    onConfirm?.({
      selectedCategoryList: categoryIdList,
      selectedIngredientList: ingredientIdList,
    });
    onOpenChange();
  };

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
              {CATEGORY_LIST.map(({ title, subCategoryList }) => (
                <div className={styles.categoryListContainer} key={title}>
                  <h6 className={styles.categoryListTitle}>{title}</h6>
                  <div className={styles.categoryList}>
                    {subCategoryList.map(({ name, value }) => (
                      <Chip
                        shape="rect"
                        key={name}
                        borderColor={
                          isSelectedCategory({ id: String(value), name })
                            ? 'mainblue500'
                            : 'grey200'
                        }
                        color={
                          isSelectedCategory({ id: String(value), name })
                            ? 'mainblue500'
                            : 'grey500'
                        }
                        backgroundColor={
                          isSelectedCategory({ id: String(value), name })
                            ? 'blue100'
                            : 'white'
                        }
                        onClick={onClickCategory({ id: String(value), name })}
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
              {CATEGORY_LIST.map(({ title, subCategoryList }) => (
                <div className={styles.categoryList} key={title}>
                  {subCategoryList.map(({ name, value }) => (
                    <Chip
                      shape="pill"
                      key={name}
                      borderColor={
                        isSelectedIngredient({ id: String(value), name })
                          ? 'mainblue500'
                          : 'grey200'
                      }
                      color={
                        isSelectedIngredient({ id: String(value), name })
                          ? 'mainblue500'
                          : 'grey500'
                      }
                      backgroundColor={
                        isSelectedIngredient({ id: String(value), name })
                          ? 'blue100'
                          : 'white'
                      }
                      onClick={onClickIngredient({ id: String(value), name })}
                    >
                      {name}
                      {isSelectedIngredient({ id: String(value), name }) && (
                        <Delete />
                      )}
                    </Chip>
                  ))}
                </div>
              ))}
            </div>
          </TabContent>
        </Tab>
        <div className={styles.fixedBottom}>
          <div className={styles.selectedTagContainer}>
            {selectedCategoryList.map(({ id, name }) => (
              <ButtonText key={id} className={styles.selectedTag}>
                {name}
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
