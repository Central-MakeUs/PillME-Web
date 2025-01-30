import * as styles from './card.css';

export type CardProps = {
  imageUrl: string;
  company: string;
  name: string;
  price: number;
  width?: number;
};

export const Card = (props: CardProps) => {
  const { imageUrl, company, name, price, width = 140 } = props;

  return (
    <div className={styles.container} style={{ width }}>
      <img
        src={imageUrl}
        className={styles.image}
        alt="제품"
        style={{ width }}
      />
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <p className={styles.company}>{company}</p>
          <p className={styles.productName}>{name}</p>
        </div>
        <p className={styles.price}>
          <span className={styles.priceNumber}>
            {Number(price).toLocaleString()}
          </span>
          원
        </p>
      </div>
    </div>
  );
};
