import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip';

const meta: Meta = {
  title: 'ui/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shape: {
      options: ['pill', 'rect', 'tag'],
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    label: 'Chip (pill)',
    shape: 'pill',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Second: Story = {
  args: {
    label: 'Chip (rect)',
    shape: 'rect',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Third: Story = {
  args: {
    label: 'Chip (tag)',
    shape: 'tag',
  },
  render: (args) => (
    <Chip {...args} backgroundColor="grey200" typography="body_4_12_b">
      chip
    </Chip>
  ),
};
