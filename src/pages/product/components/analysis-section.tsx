import { useSuspenseQuery } from '@tanstack/react-query';
import { productQueryOption } from '@/apis/query/product';
import { Spacer } from '@/ui/spacer/spacer';
import * as styles from '../page.css';
import { IngredientCard } from './ingredient-card';

export const AnalysisSection = ({ productId }: { productId: number }) => {
  //TODO useSuspenseQueries로 수정 필요
  const {
    data: {
      data: { summary, ingredients },
    },
  } = useSuspenseQuery(productQueryOption.analysis({ productId }));

  // eslint 오류 방지 콘솔
  console.log(summary, ingredients);

  return (
    <>
      <Spacer size={10} className={styles.spaceColor} />
      <section className={styles.compareContainer}>
        <div className={styles.sectionTitle}>
          제품의 총 19개의 성분 중<br />
          필미님은 4개를 충족해요
        </div>
        <div className={styles.ingredientCards}>
          {/* TODO number props 추가 */}
          <IngredientCard status="충족" />
          <IngredientCard status="부족" />
          <IngredientCard status="과다" />
        </div>
      </section>
    </>
  );
};
