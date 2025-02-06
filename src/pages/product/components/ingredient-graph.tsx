import * as styles from './ingredient-graph.css';

export const IngredientGraph = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.title}>비타민</div>
        <div className={styles.group}>
          <div className={styles.rectangleBar}></div>
          <div className={styles.rectangleBlue}></div>
          <div className={styles.ellipse}></div>
        </div>
        <div className={styles.caption}>9470 ug RE</div>
      </div>
      <div className={styles.Content}>
        <div className={styles.title}>비타민</div>
        <div className={styles.group}>
          <div className={styles.rectangleBar}></div>
          <div className={styles.rectangleBlue}></div>
          <div className={styles.ellipse}></div>
        </div>
        <div className={styles.caption}>9470 ug RE</div>
      </div>
      <div className={styles.Content}>
        <div className={styles.title}>비타민</div>
        <div className={styles.group}>
          <div className={styles.rectangleBar}></div>
          <div className={styles.rectangleBlue}></div>
          <div className={styles.ellipse}></div>
        </div>
        <div className={styles.caption}>9470 ug RE</div>
      </div>
    </div>
  );
};
