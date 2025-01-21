import { type ComponentProps } from 'react';
import { cx } from '../util';
import { useFormField } from './form-field';
import * as styles from './form-label.styles.css';

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
