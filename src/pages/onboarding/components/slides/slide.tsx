import * as styles from './second.css';

type SlideProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Slide = (props: SlideProps) => {
  const { title, description, imageUrl } = props;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </header>
        <div className={styles.imageContainer}>
          <img src={imageUrl} className={styles.image} />
        </div>
      </div>
    </div>
  );
};
