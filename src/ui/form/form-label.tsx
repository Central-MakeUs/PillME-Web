import { type ComponentProps } from 'react';
import { cx } from '../util.ts';
import { useFormField } from './form-field.tsx';
import * as styles from './form-label.styles.css.ts';

export type FormLabelProps = ComponentProps<'label'>;

// TODO required 속성 지원 필요
export const FormLabel = (props: FormLabelProps) => {
  const { children, className, ...restProps } = props;

  const { formItemId } = useFormField();
  return (
    <label
      {...restProps}
      htmlFor={formItemId}
      className={cx(styles.formLabelBase, className)}
    >
      {children}
    </label>
  );
};
