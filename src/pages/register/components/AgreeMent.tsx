import { ChangeEventHandler } from 'react';
import * as agreementStyles from '../agreementBottomSheet.css';
import { CheckIcon } from '../assets/CheckIcon';

type AgreementProps = {
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler;
  label: string;
};

export const AgreeMent = (props: AgreementProps) => {
  const { id, checked, onChange, label } = props;

  return (
    <div className={agreementStyles.checkboxItem}>
      <label className={agreementStyles.checkboxItemLeft} htmlFor={id}>
        <div
          className={agreementStyles.checkboxIndicator({
            color: checked ? 'black' : 'white',
            borderColor: checked ? 'black' : 'grey300',
          })}
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
          />
        </div>
        <p className={agreementStyles.checkboxLabel()}>{label}</p>
      </label>
    </div>
  );
};
