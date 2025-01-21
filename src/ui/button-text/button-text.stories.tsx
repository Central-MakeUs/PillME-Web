import type { Meta, StoryObj } from '@storybook/react';
import { ButtonText } from './button-text';

const meta: Meta<typeof ButtonText> = {
  title: 'ui/ButtonText',
  component: ButtonText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button Text',
    icon: false,
  },
  render: (args) => <ButtonText {...args} />,
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    icon: true,
  },
  render: (args) => <ButtonText {...args} />,
};
