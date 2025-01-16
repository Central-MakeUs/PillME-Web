import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as styles from './toggle-switch.styles.css.ts';

export type ToggleSwitchProps = Pick<
  ToggleGroup.ToggleGroupSingleProps,
  'value' | 'onValueChange'
> & {
  left: string;
  right: string;
};

export const ToggleSwitch = ({ left, right, ...props }: ToggleSwitchProps) => {
  return (
    <ToggleGroup.Root
      type="single"
      className={styles.toggleGroupRoot}
      {...props}
    >
      <ToggleGroup.Item value={left} className={styles.toggleGroupItem}>
        {left}
      </ToggleGroup.Item>
      <ToggleGroup.Item value={right} className={styles.toggleGroupItem}>
        {right}
      </ToggleGroup.Item>
      <div className={styles.toggleGroupSlider} />
    </ToggleGroup.Root>
  );
};
