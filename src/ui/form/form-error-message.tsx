import { type ComponentProps } from 'react';
import { ErrorCir } from '../../assets/index.ts';
import { cx } from '../util.ts';
import * as styles from './form-error-message.styles.css.ts';
import { useFormField } from './form-field.tsx';

export type FormErrorMessageProps = ComponentProps<'p'>;

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  const { children, className, ...restProps } = props;

  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <div id={formMessageId} className={styles.formErrorMessageContainer}>
      <ErrorCir />
      <p {...restProps} className={cx(styles.formErrorMessageBase, className)}>
        {body}
      </p>
    </div>
  );
};
