import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation, MenuItem } from './bottom-navigation.tsx';

const meta: Meta<typeof BottomNavigation> = {
  title: 'ui/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    selected: {
      control: 'select',
      options: ['home', 'pill', 'consultation', 'mypage', null],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {
    selected: null,
  },
};

export const SelectedHome: Story = {
  args: {
    selected: 'home',
  },
};

const BottomNavigationWithState = () => {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  return <BottomNavigation selected={selected} onSelect={setSelected} />;
};

export const WithState: Story = {
  render: () => <BottomNavigationWithState />,
};
