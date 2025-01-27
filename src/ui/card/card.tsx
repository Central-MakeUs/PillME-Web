import * as styles from './card.css';

export type CardProps = {
  imageUrl: string;
  company: string;
  name: string;
  price: number;
};

// TODO 세부 스타일 수정 필요 (글꼴)
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
        <p>{Number(price).toLocaleString()}원</p>
      </div>
    </div>
  );
};
