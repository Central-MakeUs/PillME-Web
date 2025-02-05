import { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';
import { TabContent } from './tab-content';
import { TabLabel } from './tab-label';

const meta: Meta<typeof Tab> = {
  title: 'ui/Tab',
  component: Tab,
  argTypes: {
    defaultValue: { control: 'text', defaultValue: 'consulting' },
    customTabsListClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabLabel label="상담 신청" value="consulting" />
      <TabLabel label="나의 상담" value="my" />

      <TabContent value="consulting">
        <div>
          <p>상담신청 컴포넌트</p>
        </div>
      </TabContent>

      <TabContent value="my">
        <div>
          <p>나의 상담 컴포넌트</p>
        </div>
      </TabContent>
    </Tab>
  ),
};

export const TwoTabsWithCustomStyle: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabLabel label="상담 신청" value="consulting" />
      <TabLabel label="나의 상담" value="my" />

      <TabContent value="consulting">
        <div>
          <p>상담신청 컴포넌트</p>
        </div>
      </TabContent>

      <TabContent value="my">
        <div>
          <p>나의 상담 컴포넌트</p>
        </div>
      </TabContent>
    </Tab>
  ),
};

export const ThreeTabsWithCustomStyle: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabLabel label="비타민" value="a" />
      <TabLabel label="무기질" value="b" />
      <TabLabel label="기능성" value="c" />

      <TabContent value="a">
        <div>
          <p>비타민 컴포넌트</p>
        </div>
      </TabContent>

      <TabContent value="b">
        <div>
          <p>무기질 컴포넌트</p>
        </div>
      </TabContent>

      <TabContent value="c">
        <div>
          <p>기능성 컴포넌트</p>
        </div>
      </TabContent>
    </Tab>
  ),
};
