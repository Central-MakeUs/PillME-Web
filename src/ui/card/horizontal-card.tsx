import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { Delete } from '@/assets';
import { IconButton } from '../icon-button';
import { Spacer } from '../spacer/spacer';
//TODO card css 재활용
import * as styles from './horizontal-card.css';

export type HorizontalCardProps = {
  imageUrl: string;
  company: string;
  name: string;
  label?: ReactNode;
} & ComponentProps<'div'>;

export const HorizontalCard = (
  props: PropsWithChildren<HorizontalCardProps>,
) => {
  const { imageUrl, company, name, label, children } = props;

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
        {children}
      </div>
      {label}
    </div>
  );
};
