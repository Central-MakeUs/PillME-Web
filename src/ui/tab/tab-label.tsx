import * as Tabs from '@radix-ui/react-tabs';
import { cx } from '../util';
import * as styles from './tab.styles.css';

interface TabLabelProps {
  label: string;
  value: string;
}

export const TabLabel = ({ label, value }: TabLabelProps) => (
  <Tabs.Trigger
    className={cx(styles.tabsTrigger, styles.activeTab)}
    value={value}
  >
    {label}
  </Tabs.Trigger>
);
