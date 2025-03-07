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

  const getStatusData = (status: string) => {
    const found = summary.find((item) => item.statusType === status);
    return found ? { count: found.count, items: found.items } : null;
  };

  const excessData = getStatusData('EXCESS'); // 과다
  const adequateData = getStatusData('ADEQUATE'); // 충족
  const deficientData = getStatusData('DEFICIENT'); // 부족

  const totalIngredients = summary.reduce((acc, item) => acc + item.count, 0);
  const fulfilledCount = adequateData ? adequateData.count : 0;

  return (
    <>
      <Spacer size={10} className={styles.spaceColor} />
      <section className={styles.compareContainer}>
        <div className={styles.sectionTitle}>
          제품의 총 {totalIngredients}개의 성분 중<br />
          {fulfilledCount}개를 충족해요
          {/* 나중에 이름도 넣야함: 필미님은 3개를 충족해요 */}
        </div>
        <div className={styles.ingredientCards}>
          {adequateData && (
            <IngredientCard
              status="충족"
              count={adequateData.count}
              items={adequateData.items}
            />
          )}
          {deficientData && (
            <IngredientCard
              status="부족"
              count={deficientData.count}
              items={deficientData.items}
            />
          )}
          {excessData && (
            <IngredientCard
              status="과다"
              count={excessData.count}
              items={excessData.items}
            />
          )}
        </div>
      </section>
    </>
  );
};
