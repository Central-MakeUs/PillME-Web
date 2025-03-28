import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from '@/assets';
import {
  CATEGORY_LIST,
  CATEGORY_TITLE_MAP,
  CATEGORY_TYPE,
  Category,
} from '@/constants/category';
import { AppBar } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { values } from '@/utils/values';
import { entries } from '../../utils/entries';
import { useScrollTop } from './hooks/useScrollTop';
import * as styles from './page.css';

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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AppBar variant="page" left={<ArrowLeft onClick={goBack} />}>
            {!isTop && <h1 className={styles.pageTitle}>건강 고민 선택</h1>}
          </AppBar>
          <div className={styles.separator} />
        </motion.div>
      }
    >
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <div ref={observerRef} />
        <h2 className={styles.pageDescription}>
          건강 고민에 해당되는
          <br />
          카테고리를 선택해보세요
        </h2>
        <Spacer size={30} />
        <div className={styles.categoryContainer}>
          {entries(groupData).map(([categoryType, categortList]) => (
            <div className={styles.categoryGalleryContainer} key={categoryType}>
              <h6 className={styles.categoryGalleryTitle}>
                {CATEGORY_TITLE_MAP[categoryType]}
              </h6>
              <div className={styles.categoryGallery}>
                {categortList.map(({ icon: Icon, name, id }) => (
                  <div
                    key={name}
                    className={styles.categoryCard}
                    onClick={onClickCategory(id)}
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
      </motion.section>
    </PageLayout>
  );
};
