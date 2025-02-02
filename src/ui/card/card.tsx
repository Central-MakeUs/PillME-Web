import * as styles from './card.css';

export type CardProps = {
  imageUrl: string;
  company: string;
  name: string;
  price: number;
};

export const Card = (props: CardProps) => {
  const { imageUrl, company, name, price } = props;

  return (
    <div className={styles.container}>
      <img src={imageUrl} className={styles.image} alt="제품" />
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
