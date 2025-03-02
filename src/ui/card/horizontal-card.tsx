import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { Delete } from '@/assets';
import { Dialog } from '../dialog';
import { IconButton } from '../icon-button';
import { Spacer } from '../spacer/spacer';
//TODO card css 재활용
import * as styles from './horizontal-card.css';

export type HorizontalCardProps = {
  imageUrl: string;
  company: string;
  name: string;
  label?: ReactNode;
  onClickDeletebutton?: VoidFunction;
} & ComponentProps<'div'>;

export const HorizontalCard = (
  props: PropsWithChildren<HorizontalCardProps>,
) => {
  const { imageUrl, company, name, label, onClickDeletebutton, children } =
    props;

  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.itemContent}>
        <section>
          <div className={styles.itemHeader}>
            <p className={styles.cardDescription}>{company}</p>
            <Dialog
              trigger={
                <IconButton className={styles.iconButton}>
                  <Delete />
                </IconButton>
              }
              title="제품을 내 약통에서 삭제할까요?"
              description="제품을 삭제할 시 복용 약 성분 분석에 반영돼요"
              action="default"
              leftButtonText="취소"
              rightButtonText="삭제"
              onConfirm={onClickDeletebutton}
            />
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
