import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from '../bottom-navigation';
import { MobileLayout } from './mobile-layout';
import { PageLayout } from './page-layout';

const meta: Meta = {
  title: 'ui/MobileLayout',
  component: MobileLayout,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <MobileLayout {...args}>hello</MobileLayout>,
};

export const WithHeader: Story = {
  render: (args) => (
    <MobileLayout {...args}>
      <PageLayout
        header={
          <div
            style={{
              backgroundColor: 'orange',
            }}
          >
            헤더
          </div>
        }
      >
        hello{' '}
      </PageLayout>{' '}
    </MobileLayout>
  ),
};

export const WithBottomNavigation: Story = {
  render: (args) => (
    <MobileLayout {...args}>
      <PageLayout
        header={
          <div
            style={{
              backgroundColor: 'orange',
            }}
          >
            헤더
          </div>
        }
      >
        <div
          style={{
            height: '100dvh',
            backgroundColor: 'yellow',
          }}
        >
          hello
        </div>
      </PageLayout>
      <BottomNavigation />
    </MobileLayout>
  ),
};
