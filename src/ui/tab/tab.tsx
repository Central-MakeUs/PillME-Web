import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { cx } from '../util';
import { TabContent } from './tab-content';
import { TabLabel } from './tab-label';
import * as styles from './tab.styles.css';

interface TabsProps {
  defaultValue?: string;
  rootClassName?: string;
  customTabsListClass?: string;
  contentClassName?: string;
  children: React.ReactNode;
}
// customTabsListClass: label쪽 UI 가 달라서 props로 조절해야함

export const Tab = ({
  defaultValue,
  rootClassName,
  customTabsListClass,
  children,
}: TabsProps) => {
  const labels: React.ReactNode[] = [];
  const contents: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === TabLabel) {
      labels.push(child);
    } else if (child.type === TabContent) {
      contents.push(child);
    }
  });

  return (
    <Tabs.Root
      className={cx(styles.tabsRoot, rootClassName)}
      defaultValue={defaultValue}
    >
      <Tabs.List
        className={cx(styles.tabsList, customTabsListClass)}
        aria-label="Dynamic Tabs"
      >
        {labels}
      </Tabs.List>
      {contents}
    </Tabs.Root>
  );
};
