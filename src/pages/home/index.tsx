import { useState } from 'react';
import { Cart, Logo } from '../../assets';
import { AppBar } from '../../ui/app-bar';
import { ButtonText } from '../../ui/button-text';
import { Chip } from '../../ui/chip';
import { PageLayout } from '../../ui/layout/page-layout';
import { SearchField } from '../../ui/search-field';
import { Spacer } from '../../ui/spacer/spacer';
import { Switch } from '../../ui/switch';
import { RecommendCategory } from './components/recommend-category';
import { RecommendProductGallery } from './components/recommend-product';
import { RECOMMEND_CATEGORY_LIST } from './recommend-category';
import * as styles from './styles.css';

export const HomePage = () => {
  const [searchMode, setSearchMode] = useState<string>('AI 증상 검색');

  return (
    <PageLayout
      header={
        <AppBar right={<Cart />} className={styles.home}>
          <Logo />
        </AppBar>
      }
      className={styles.home}
    >
      <div className={styles.mainContainer}>
        <div className={styles.mainSearchContainer}>
          <Switch
            left="증상 AI 검색"
            right="제품 검색"
            value={searchMode}
            onValueChange={setSearchMode}
          />

          <SearchField
            placeholder="건강 불편 증상을 검색해 보세요"
            variant="home"
            disabled
          />
        </div>
        <Spacer size={32} />
        <div className={styles.contentContainer}>
          <div>
            <h4 className={styles.recommendSearchTitle}>추천 검색어</h4>
            <p className={styles.recommendSearchDescription}>
              이렇게 검색헤보세요
            </p>
          </div>
          <div className={styles.recommendSearchKeywordContainer}>
            <Chip state="default" shape="pill" color="default">
              다이어트 하는 중에 탈모가 왔어요
            </Chip>
            <Chip state="default" shape="pill" color="default">
              야채 섭취가 부족해요
            </Chip>
            <Chip state="default" shape="pill" color="default">
              일어날 때 머리가 어지러워요
            </Chip>
          </div>
        </div>
      </div>

      <div className={styles.bottomSheetContainer}>
        <div className={styles.bottomSheetHealthCategoryContainer}>
          {/* TODO 추후 캐러셀 추가 */}
          <section className={styles.recommendCategoryContainer}>
            <h4 className={styles.recommendCategoryTitle}>
              추천 건강 고민 카테고리
            </h4>
            <div className={styles.recommendCategoryGallery}>
              {RECOMMEND_CATEGORY_LIST.map(({ icon, name }) => (
                <RecommendCategory key={name} Icon={icon} name={name} />
              ))}
            </div>
          </section>
        </div>
        <button className={styles.viewAllButton}>
          <ButtonText icon>건강 고민 전체 보기</ButtonText>
        </button>
        <div className={styles.separator} />

        <div className={styles.recommendProductContainer}>
          {/* TODO 추후 배열로 렌더링할 예정 */}
          <RecommendProductGallery
            description="약통에 많이 담기고 있어요!"
            title="인기 건강 기능 식품"
          />
          <RecommendProductGallery
            description="20대 여성"
            title="추천 건강 식품"
          />
        </div>
      </div>
    </PageLayout>
  );
};
