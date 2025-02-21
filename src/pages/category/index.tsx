import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { CATEGORY_LIST } from './category';
import { useScrollTop } from './hooks/useScrollTop';
import * as styles from './page.css';

export const CategoryPage = () => {
  const { isTop, observerRef } = useScrollTop();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const onClickCategory = (category: number) => () => {
    navigate(String(category));
  };

  return (
    <PageLayout
      header={
        <div>
          <AppBar variant="page" left={<ArrowLeft onClick={goBack} />}>
            {!isTop && <h1 className={styles.pageTitle}>건강 고민 선택</h1>}
          </AppBar>
          <div className={styles.separator} />
        </div>
      }
    >
      <section className={styles.container}>
        <div ref={observerRef} />
        <h2 className={styles.pageDescription}>
          건강 고민에 해당되는
          <br />
          카테고리를 선택해보세요
        </h2>
        <Spacer size={30} />
        {/* category container */}
        <div className={styles.categoryContainer}>
          {/* category gallery container */}
          {CATEGORY_LIST.map(({ title, subCategoryList }) => (
            <div className={styles.categoryGalleryContainer} key={title}>
              <h6 className={styles.categoryGalleryTitle}>{title}</h6>
              <div className={styles.categoryGallery}>
                {subCategoryList.map(({ icon: Icon, name, value }) => (
                  <div
                    key={name}
                    className={styles.categoryCard}
                    onClick={onClickCategory(value)}
                  >
                    <Icon />
                    <p className={styles.categoryLabel}>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.categoryGalleryContainer}>
            <h6 className={styles.categoryGalleryTitle}></h6>
            <div className={styles.categoryGallery}> </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
