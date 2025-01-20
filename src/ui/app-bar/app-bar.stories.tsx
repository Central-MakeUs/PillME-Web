import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft, Cart, Logo } from '../../assets/index.ts';
import { AppBar } from './app-bar.tsx';

const meta: Meta<typeof AppBar> = {
  title: 'ui/AppBar',
  component: AppBar,
  argTypes: {
    variant: {
      options: ['default', 'page'],
      control: 'radio',
    },
  },
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AppBar {...args}>
      <Logo />
    </AppBar>
  ),
};

export const DefaultWithRight: Story = {
  render: (args) => (
    <AppBar {...args} right={<Cart />}>
      <Logo />
    </AppBar>
  ),
};

export const Page: Story = {
  args: {
    variant: 'page',
  },
  render: (args) => <AppBar {...args}>title</AppBar>,
};

export const PageWithElement: Story = {
  args: {
    variant: 'page',
  },
  render: (args) => (
    <AppBar {...args} left={<ArrowLeft />} right={<Cart />}>
      title
    </AppBar>
  ),
};
