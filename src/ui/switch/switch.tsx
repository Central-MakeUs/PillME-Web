import { ComponentProps } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import * as styles from './switch.styles.css.ts';

export type SwitchProps = ComponentProps<typeof RadixSwitch.Root> & {
  leftLabel?: string;
  rightLabel?: string;
};

export const Switch = ({
  leftLabel,
  rightLabel,
  checked,
  onCheckedChange,
  ...props
}: SwitchProps) => {
  return (
    <RadixSwitch.Root
      {...props}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={styles.switchRoot}
    >
      <div className={styles.switchSlider({ checked })} />

      <RadixSwitch.Thumb
        className={styles.switchThumb({
          checked: !checked,
        })}
      >
        {leftLabel}
      </RadixSwitch.Thumb>
      <RadixSwitch.Thumb
        className={styles.switchThumb({
          checked,
        })}
      >
        {rightLabel}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
};
