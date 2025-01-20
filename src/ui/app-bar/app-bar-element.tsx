import { ComponentProps } from 'react';
import { cx } from '../util.ts';
import * as styles from './app-bar-element.styles.css.ts';

export type AppBarElementProps = ComponentProps<'div'> &
  styles.AppBarElementVariant;

export const AppBarElement = (props: AppBarElementProps) => {
  const { children, className, direction, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={cx(styles.appBarElement({ direction }), className)}
    >
      {children}
    </div>
  );
};
