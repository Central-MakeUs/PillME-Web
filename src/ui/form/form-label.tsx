import { type ComponentProps } from 'react';
import { cx } from '../util.ts';
import { useFormField } from './form-field.tsx';
import * as styles from './form-label.styles.css.ts';

export type FormLabelProps = ComponentProps<'label'> & {
  required?: boolean;
};

export const FormLabel = (props: FormLabelProps) => {
  const { children, className, required, ...restProps } = props;

  const { formItemId } = useFormField();
  return (
    <label
      {...restProps}
      htmlFor={formItemId}
      className={cx(styles.formLabelBase, className)}
    >
      {children}
      {required && <span className={styles.requiredIcon}>*</span>}
    </label>
  );
};
