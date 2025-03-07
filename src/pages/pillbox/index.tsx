import { Suspense, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { myMedicneQueryOption } from '@/apis/query/myMedicine';
import { Cart, Intake, Notice, PillBox, PlusBlue } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import * as bottomStyles from '@/pages/product/ingredient/bottomSheet.css';
import { AppBar } from '@/ui/app-bar';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
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

const PillboxPageInner = () => {
  const pillData = [];
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    data: { data: medicineList },
  } = useSuspenseQuery(myMedicneQueryOption.list());
  console.log(medicineList);
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
        <div className={styles.boxTitle}>필미님의 약통</div>
        {medicineList.length === 0 ? (
          <div className={styles.myPillBox}>
            <PlusBlue />
            <span className={styles.boxDesc}>
              내 약통에 건강기능식품을 추가해주세요
            </span>
            <PillBox className={styles.boxIcon} />
          </div>
        ) : (
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
        <Tab defaultValue="비타민" customTabsListClass={styles.tabLabel}>
          <TabLabel label="비타민" value="비타민" />
          <TabLabel label="무기질" value="무기질" />
          <TabLabel label="기능성" value="기능성" />
          {pillData.length === 0 ? (
            <div className={styles.analyzeTitle}>
              해당하는 복용 성분이 없어요
            </div>
          ) : (
            <>
              <TabContent value="비타민">
                <IngredientGraph />
              </TabContent>

              <TabContent value="무기질">
                <IngredientGraph />
              </TabContent>

              <TabContent value="기능성">
                <IngredientGraph />
              </TabContent>
            </>
          )}
        </Tab>
        <div className={styles.ingredientGrid}>
          <div className={styles.flexStyle}>
            <div className={styles.statusIndicator({ status: 'red' })}></div>
            <div className={styles.statusText({ status: 'red' })}>부족</div>
            <div className={styles.countText}>0개</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.flexStyle}>
            <div className={styles.statusIndicator({ status: 'green' })}></div>
            <div className={styles.statusText({ status: 'green' })}>충족</div>
            <div className={styles.countText}>0개</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.flexStyle}>
            <div className={styles.statusIndicator({ status: 'yellow' })}></div>
            <div className={styles.statusText({ status: 'yellow' })}>과다</div>
            <div className={styles.countText}>0개</div>
          </div>
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
