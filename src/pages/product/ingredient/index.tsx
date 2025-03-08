import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Intake, Notice } from '@/assets';
import { MOCK_PRODUCT_LIST } from '@/pages/home/mock-product';
import { AppBar } from '@/ui/app-bar';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Chip } from '@/ui/chip';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { Tab, TabContent, TabLabel } from '@/ui/tab';
// import { IngredientGraph } from '../components/ingredient-graph';
import * as bottomStyles from './bottomSheet.css';
import * as styles from './styles.css';

export const ProductIngredientPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const product = MOCK_PRODUCT_LIST.find((p) => p.id === Number(productId));

  return (
    <PageLayout
      header={
        <div>
          <AppBar
            left={<ArrowLeft onClick={() => navigate(-1)} />}
            variant="page"
          >
            성분전체보기
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <section className={styles.pillContainer}>
        <img src={product?.imageUrl} className={styles.productImg} alt="제품" />
        <div className={styles.productDesc}>
          <div className={styles.productTexts}>
            <div className={styles.text1}>웰릿</div>
            <div className={styles.text2}>웰릿나토킨 두줄넘어갈시</div>
          </div>
          <div className={styles.chipBox}>
            <Chip shape="pill" color="blue400" backgroundColor="blue200">
              혈압
            </Chip>
            <Chip shape="pill" color="grey500" backgroundColor="grey200">
              루테인
            </Chip>
            <Chip shape="pill" color="grey500" backgroundColor="grey200">
              루테인
            </Chip>
          </div>
        </div>
      </section>
      <Spacer size={10} className={styles.spaceColor} />

      <Tab defaultValue="비타민" customTabsListClass={styles.tabLabel}>
        {/* Tab Labels */}
        <TabLabel label="비타민" value="비타민" />
        <TabLabel label="무기질" value="무기질" />
        <TabLabel label="기능성" value="기능성" />
        <TabContent value="비타민">
          <div>테스트</div>
        </TabContent>
        {/* Tab Contents */}
        {/* <TabContent value="비타민">
          <IngredientGraph />
        </TabContent>

        <TabContent value="무기질">
          <IngredientGraph />
        </TabContent>

        <TabContent value="기능성">
          <IngredientGraph />
        </TabContent> */}
      </Tab>
      <div className={styles.notice} onClick={() => setIsOpen(true)}>
        <Notice />
        성분 그래프 안내
      </div>

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
