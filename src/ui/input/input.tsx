import { ComponentProps } from 'react';
import { cx } from '../util';
import * as styles from './input.styles.css';

export type InputProps = ComponentProps<'input'> & styles.InputVariants;

export const Input = (props: InputProps) => {
  const { className, variant, ...restProps } = props;

  return (
    <input
      {...restProps}
      className={cx(
        styles.inputVariants({ variant }),
        className ?? styles.inputWithElement,
        className,
      )}
    />
  );
};
