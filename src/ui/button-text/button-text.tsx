import { ComponentProps } from 'react';
import { ArrowRightr } from '../../assets/index.ts';
import { cx } from '../util.ts';
import * as styles from './button-text.css.ts';

export type ButtonTextProps = ComponentProps<'span'> & {
  icon?: boolean;
};

export const ButtonText = ({
  className,
  icon = false,
  children,
  ...restProps
}: ButtonTextProps) => {
  return (
    <span {...restProps} className={cx(styles.buttonText, className)}>
      {children}
      {icon && <ArrowRightr className={styles.icon} />}
    </span>
  );
};
