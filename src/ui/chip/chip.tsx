import { ComponentProps, PropsWithChildren } from 'react';
import { globalVars } from '../theme.css.ts';
import { cx } from '../util.ts';
import * as styles from './chip.styles.css.ts';
import { DeleteIcon } from './delete-icon.tsx';

export type ChipProps = ComponentProps<'div'> & styles.ChipVariants;

export const Chip = (props: PropsWithChildren<ChipProps>) => {
  const { className, state, shape, color, ...restProps } = props;

  const hasRightButton =
    state === 'active' && shape === 'pill' && color === 'default';

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
      {hasRightButton && <DeleteIcon color={globalVars.color.mainblue500} />}
    </div>
  );
};
