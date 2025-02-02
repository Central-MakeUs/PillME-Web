import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { cx } from '../util';
import * as styles from './chip.styles.css';

export type ChipProps = {
  right?: ReactNode;
} & ComponentProps<'div'> &
  styles.ChipVariants;

export const Chip = (props: PropsWithChildren<ChipProps>) => {
  const {
    className,
    shape,
    color,
    borderColor,
    backgroundColor,
    typography,
    right,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      className={cx(
        styles.chipVariants({
          shape,
          color,
          borderColor,
          backgroundColor,
          typography,
        }),
        right && styles.chipHasElement,
        className,
      )}
    >
      {props.children}
      {right}
    </div>
  );
};
