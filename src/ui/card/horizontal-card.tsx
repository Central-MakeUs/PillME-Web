import { ComponentProps, ReactNode } from 'react';
import { Delete } from '@/assets';
import { Chip } from '../chip';
import { IconButton } from '../icon-button';
import { Spacer } from '../spacer/spacer';
//TODO card css 재활용
import * as styles from './horizontal-card.css';

type Tag = {
  type: 'category' | 'ingredient';
  name: string;
};

export type HorizontalCardProps = {
  imageUrl: string;
  company: string;
  name: string;
  tagList?: Tag[];
  label?: ReactNode;
} & ComponentProps<'div'>;

export const HorizontalCard = (props: HorizontalCardProps) => {
  const { imageUrl, tagList, company, name, label } = props;

  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.itemContent}>
        <section>
          <div className={styles.itemHeader}>
            <p className={styles.cardDescription}>{company}</p>
            <IconButton className={styles.iconButton}>
              <Delete />
            </IconButton>
          </div>
          <Spacer size={2} />
          <h6 className={styles.cardTitle}>{name}</h6>
        </section>
        {tagList && (
          <div className={styles.chipContainer}>
            {tagList.map(({ name, type }, index) => (
              <Chip
                shape="tag"
                backgroundColor={type === 'category' ? 'blue200' : 'grey200'}
                color={type === 'category' ? 'blue400' : 'grey500'}
                typography="body_4_12_b"
                key={index}
              >
                {name}
              </Chip>
            ))}
          </div>
        )}
      </div>
      {label}
    </div>
  );
};
