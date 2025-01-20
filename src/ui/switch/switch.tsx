import * as RadixSwitch from '@radix-ui/react-switch';
import * as styles from './switch.styles.css';

export type SwitchProps = Omit<
  RadixSwitch.SwitchProps,
  'checked' | 'onCheckedChange'
> & {
  left: string;
  right: string;
  value: string;
  onValueChange: (value: string) => void;
};

export const Switch = ({
  left,
  right,
  value,
  onValueChange,
  ...props
}: SwitchProps) => {
  const isChecked = value === right;

  const handleCheckedChange = (checked: boolean) => {
    onValueChange(checked ? right : left);
  };

  return (
    <RadixSwitch.Root
      {...props}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
      className={styles.switchRoot}
    >
      <div className={styles.switchSlider({ checked: isChecked })} />

      <RadixSwitch.Thumb
        className={styles.switchThumb({
          checked: !isChecked,
        })}
      >
        {left}
      </RadixSwitch.Thumb>
      <RadixSwitch.Thumb
        className={styles.switchThumb({
          checked: isChecked,
        })}
      >
        {right}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
};
