import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip.tsx';

const meta: Meta = {
  title: 'ui/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      options: ['default', 'active', 'tag'],
      control: {
        type: 'radio',
      },
    },
    shape: {
      options: ['pill', 'rect'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['default', 'grey', 'blue'],
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Chip (default, pill, default)',
    state: 'default',
    shape: 'pill',
    color: 'default',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Second: Story = {
  args: {
    label: 'Chip (active, pill, default)',
    state: 'active',
    shape: 'pill',
    color: 'default',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Third: Story = {
  args: {
    label: 'Chip (default, pill, default)',
    state: 'default',
    shape: 'rect',
    color: 'default',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Fourth: Story = {
  args: {
    label: 'Chip (default, pill, default)',
    state: 'active',
    shape: 'rect',
    color: 'default',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Fifth: Story = {
  args: {
    label: 'Chip (default, pill, default)',
    state: 'tag',
    shape: 'pill',
    color: 'grey',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};

export const Sixth: Story = {
  args: {
    label: 'Chip (default, pill, default)',
    state: 'tag',
    shape: 'pill',
    color: 'blue',
  },
  render: (args) => <Chip {...args}>chip</Chip>,
};
