import { ComponentProps } from 'react';
import { cx } from '../util';
import * as styles from './input-element.styles.css';

type InputElementProps = ComponentProps<'div'>;

export type InputRightElementProps = InputElementProps;

export const InputRightElement = (props: InputRightElementProps) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={cx(styles.inputElement({ direction: 'right' }), className)}
    >
      {children}
    </div>
  );
};
