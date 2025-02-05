import { ChangeEventHandler, ComponentProps } from 'react';
import { CheckIcon } from '@/pages/register/assets/CheckIcon';
import { cx } from '@/ui/util';
import * as styles from './check-box.css';

export type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  inputProps?: ComponentProps<'input'>;
  className?: string;
};

export const Checkbox = (props: CheckboxProps) => {
  const { id, checked, onChange, className, inputProps } = props;

  return (
    <label
      className={cx(
        styles.checkboxIndicator({
          backgroundColor: checked ? 'black' : 'white',
          borderColor: checked ? 'black' : 'grey300',
        }),
        className,
      )}
      htmlFor={id}
    >
      {checked && <CheckIcon />}
      <input
        hidden
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange}
        style={{
          display: 'none',
        }}
        {...inputProps}
      />
    </label>
  );
};
