import { ComponentProps, PropsWithChildren } from 'react';
import { cx } from '../util';
import * as styles from './icon-button.css';

export type IconButtonProps = ComponentProps<'button'>;

export const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  const { className, children, ...restProps } = props;

  return (
    <button className={cx(styles.iconButton, className)} {...restProps}>
      {children}
    </button>
  );
};
