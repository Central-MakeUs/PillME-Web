import { ComponentProps, PropsWithChildren } from 'react';
import { globalVars } from '../theme.css';
import { cx } from '../util';
import * as styles from './chip.styles.css';
import { DeleteIcon } from './delete-icon';

export type ChipProps = ComponentProps<'div'> & styles.ChipVariants;

export const Chip = (props: PropsWithChildren<ChipProps>) => {
  const { className, state, shape, color, ...restProps } = props;

  const hasRightButton =
    shape === 'pill' &&
    color === 'default' &&
    (state === 'active' || state === 'default');

  const deleteIconColor =
    state === 'default'
      ? globalVars.color.grey200
      : globalVars.color.mainblue500;

  return (
    <div
      {...restProps}
      className={cx(
        styles.chipVariants({
          state,
          shape,
          color,
        }),
        hasRightButton && styles.chipHasElement,
        className,
      )}
    >
      {props.children}
      {hasRightButton && <DeleteIcon color={deleteIconColor} />}
    </div>
  );
};
