import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightr, Plus } from '@/assets';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'third'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    disabled: { control: 'boolean' },
    left: { control: 'boolean' },
    right: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: '다양한 스타일과 크기를 가진 버튼 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary 버튼',
    variant: 'primary',
    size: 'middle',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary 버튼',
    variant: 'secondary',
    size: 'middle',
  },
};

export const Third: Story = {
  args: {
    children: 'Third 버튼',
    variant: 'third',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    variant: 'primary',
    size: 'large',
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: '왼쪽 아이콘',
    variant: 'third',
    size: 'large',
    left: <Plus width={20} height={20} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: '오른쪽 아이콘',
    variant: 'primary',
    size: 'small',
    right: <ArrowRightr width={24} height={24} />,
  },
};
