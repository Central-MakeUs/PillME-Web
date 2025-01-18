import { type ComponentProps } from 'react';
import { cx } from '../util.ts';
import * as styles from './input-container.styles.css.ts';

export type InputContainerProps = ComponentProps<'div'>;

export const InputContainer = (props: InputContainerProps) => {
  const { children, className, ...restProps } = props;

  return (
    <div {...restProps} className={cx(styles.inputContainerBase, className)}>
      {children}
    </div>
  );
};
