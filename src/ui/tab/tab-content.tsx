import * as Tabs from '@radix-ui/react-tabs';

interface TabContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabContent = ({ value, children, className }: TabContentProps) => (
  <Tabs.Content value={value} className={className}>
    {children}
  </Tabs.Content>
);
