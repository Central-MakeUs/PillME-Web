import { Suspense, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';
import { myMedicneQueryOption } from '@/apis/query/myMedicine';
import { Cart, Intake, Notice, PillBox, PlusBlue } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import * as bottomStyles from '@/pages/product/ingredient/bottomSheet.css';
import { AppBar } from '@/ui/app-bar';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { ButtonText } from '@/ui/button-text';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
import { Loading } from '../loading';
import { IngredientGraph } from '../product/components/ingredient-graph';
import * as styles from './page.css';

export const PillboxPage = () => {
  return (
    <LocalErrorBoundary>
      <Suspense fallback={<Loading />}>
        <PillboxPageInner />
      </Suspense>
    </LocalErrorBoundary>
  );
};

type StatusKey = 'DEFICIENT' | 'ADEQUATE' | 'EXCESS';
type StatusColor = 'red' | 'green' | 'yellow';

const statusMapping: Record<StatusKey, { label: string; color: StatusColor }> =
  {
    DEFICIENT: { label: '부족', color: 'red' },
    ADEQUATE: { label: '충족', color: 'green' },
    EXCESS: { label: '과다', color: 'yellow' },
  };

const PillboxPageInner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    data: { data: medicineList },
  } = useSuspenseQuery(myMedicneQueryOption.list());

  //TODO suspensive queries로 수정
  const {
    data: {
      data: { summary, ingredients },
    },
  } = useSuspenseQuery(myMedicneQueryOption.analysis());

  // console.log(summary, ingredients);

  const categorizedIngredients = {
    VITAMIN: ingredients.filter((item) => item.category === 'VITAMIN'),
    MINERAL: ingredients.filter((item) => item.category === 'MINERAL'),
    FUNCTIONAL: ingredients.filter((item) => item.category === 'FUNCTIONAL'),
  };

  // 실제 존재하는 카테고리만 필터링
  const availableCategories = Object.entries(categorizedIngredients)
    .filter(([_, items]) => items.length > 0)
    .map(([category]) => category);

  console.log(availableCategories);

  // 첫 번째 카테고리를 defaultValue로 설정 (없을 경우 빈 문자열)
  const defaultTabValue =
    availableCategories.length > 0 ? availableCategories[0] : undefined;
  console.log('defaultTabValue: ', defaultTabValue);
  return (
    <PageLayout
      header={
        <AppBar right={<Cart />} variant="default">
          내 약통
        </AppBar>
      }
    >
      <Spacer size={37} />
      <section className={styles.boxContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.boxTitle}>약통</div>
          <ButtonText icon onClick={() => navigate(`/pillbox/manage`)}>
            전체 보기
          </ButtonText>
        </div>

        {medicineList.length === 0 ? (
          <div className={styles.myPillBox}>
            <PlusBlue />
            <span className={styles.boxDesc}>
              내 약통에 건강기능식품을 추가해주세요
            </span>
            <PillBox className={styles.boxIcon} />
          </div>
        ) : (
          <>
            <div className={styles.itemContents}>
              {medicineList.map(({ product, myMedicineId }) => (
                <div
                  key={myMedicineId}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.imageUrl}
                    className={styles.image}
                    alt="제품"
                  />
                  <div className={styles.name}>{product.name}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <Spacer size={10} className={styles.spaceColor} />
      <section className={styles.analyzeContainer}>
        <div className={styles.analyzeHeader}>
          <span className={styles.boxTitle}>내 약통 성분 분석</span>
          <span className={styles.notice} onClick={() => setIsOpen(true)}>
            <Notice />
            성분 그래프 안내
          </span>
        </div>
        {availableCategories.length > 1 ? (
          <Tab
            defaultValue={defaultTabValue}
            customTabsListClass={styles.tabLabel}
          >
            <TabLabel label="비타민" value="VITAMIN" />
            <TabLabel label="무기질" value="MINERAL" />
            <TabLabel label="기능성" value="FUNCTIONAL" />
            <TabContent value="VITAMIN">
              <IngredientGraph
                ingredients={categorizedIngredients['VITAMIN']}
              />
            </TabContent>
            <TabContent value="MINERAL">
              <IngredientGraph
                ingredients={categorizedIngredients['MINERAL']}
              />
            </TabContent>
            <TabContent value="FUNCTIONAL">
              <IngredientGraph
                ingredients={categorizedIngredients['FUNCTIONAL']}
              />
            </TabContent>
          </Tab>
        ) : (
          <div className={styles.analyzeTitle}>해당하는 복용 성분이 없어요</div>
        )}

        <div className={styles.ingredientGrid}>
          {['DEFICIENT', 'ADEQUATE', 'EXCESS'].map((key, index) => {
            const statusData = summary.find((item) => item.statusType === key);
            const count = statusData ? statusData.count : 0;
            const { label, color } =
              statusMapping[key as keyof typeof statusMapping];

            return (
              <Fragment key={key}>
                {index !== 0 && <div className={styles.line}></div>}
                <div className={styles.flexStyle}>
                  <div
                    className={styles.statusIndicator({ status: color })}
                  ></div>
                  <div className={styles.statusText({ status: color })}>
                    {label}
                  </div>
                  <div className={styles.countText}>{count}개</div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
      <BottomSheet.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          <section className={bottomStyles.container}>
            <header className={bottomStyles.title}>
              <BottomSheet.Title asChild>
                <h4>성분 그래프 기준 안내</h4>
              </BottomSheet.Title>
            </header>
            <div className={bottomStyles.contents}>
              <div className={bottomStyles.box1}>
                <span>충분섭취량정도</span>
                <Intake />
              </div>
              <div className={bottomStyles.box1}>
                <span>제품 함량 정도</span>
                <div className={bottomStyles.box2}>
                  <div className={bottomStyles.flexStyle}>
                    <div className={bottomStyles.danger}></div>
                    <div>부족</div>
                  </div>
                  <div className={bottomStyles.flexStyle}>
                    <div className={bottomStyles.success}></div>
                    <div>적정</div>
                  </div>
                  <div className={bottomStyles.flexStyle}>
                    <div className={bottomStyles.overflow}></div>
                    <div>과다</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </PageLayout>
  );
};
