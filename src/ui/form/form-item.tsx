import { type ComponentProps, useId } from 'react';
import { cx } from '../util.ts';
import { FormItemContext } from './form-field.tsx';
import * as styles from './form-item.styles.css.ts';

export type FormItemProps = ComponentProps<'div'>;

export const FormItem = (props: FormItemProps) => {
  const { children, className, ...restProps } = props;

  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div {...restProps} className={cx(styles.formItemBase, className)}>
        {children}
      </div>
    </FormItemContext.Provider>
  );
};