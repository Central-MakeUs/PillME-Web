import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { cx } from '../util';
import { AppBarElement } from './app-bar-element';
import * as styles from './app-bar.styles.css';

export type AppBarProps = ComponentProps<'div'> & {
  left?: ReactNode;
  right?: ReactNode;
} & styles.AppBarVariants;

export const AppBar = (props: PropsWithChildren<AppBarProps>) => {
  const { left, right, children, variant, className, ...restProps } = props;

  return (
    <div {...restProps} className={cx(styles.appBar({ variant }), className)}>
      {left && <AppBarElement direction="left">{left}</AppBarElement>}
      {children}
      {right && <AppBarElement direction="right">{right}</AppBarElement>}
    </div>
  );
};
