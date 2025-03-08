import * as styles from './ingredient-graph.css';

interface Ingredient {
  ingredientName: string;
  totalAmount: number;
  unit: string;
  minIntake: number;
  maxIntake: number;
  upperLimit: number | null;
  status: 'DEFICIENT' | 'ADEQUATE' | 'EXCESS';
}

interface IngredientGraphProps {
  ingredients: Ingredient[];
}

export const IngredientGraph = ({ ingredients }: IngredientGraphProps) => {
  return (
    <div className={styles.Container}>
      {ingredients.map((ingredient) => {
        // 막대 바의 비율 계산 (최대 섭취량을 기준으로 100% 설정)
        const barWidth = Math.min(
          (ingredient.totalAmount / ingredient.maxIntake) * 100,
          100,
        );

        // 원의 위치 설정 (최대 섭취량 대비 비율)
        const ellipsePosition = Math.min(
          (ingredient.totalAmount / ingredient.upperLimit!) * 100,
          100,
        );

        return (
          <div key={ingredient.ingredientName} className={styles.Content}>
            <div className={styles.title}>{ingredient.ingredientName}</div>
            <div className={styles.group}>
              <div className={styles.rectangleBar}></div>
              <div
                className={styles.rectangleBlue}
                style={{ width: `${barWidth}%` }}
              ></div>
              <div
                className={styles.ellipse({ status: ingredient.status })}
                style={{ left: `${ellipsePosition}%` }}
              ></div>
            </div>
            <div className={styles.caption}>
              {ingredient.totalAmount} {ingredient.unit}
            </div>
          </div>
        );
      })}
    </div>
  );
};
