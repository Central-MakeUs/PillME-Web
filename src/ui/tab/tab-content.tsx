import * as Tabs from '@radix-ui/react-tabs';

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabContent = ({ value, children }: TabContentProps) => (
  <Tabs.Content value={value}>{children}</Tabs.Content>
);
