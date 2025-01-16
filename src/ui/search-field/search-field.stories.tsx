import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from './search-field.tsx';

const meta: Meta = {
  title: 'ui/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    hasResetButton: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: ['default', 'home'],
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Default',
    hasResetButton: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'With Placeholder',
    placeholder: '건강 불편 증상을 검색해 보세요',
  },
};

export const Home: Story = {
  args: {
    label: 'Home',
    value: 'Home에서 검색 창',
    variant: 'home',
  },
};
