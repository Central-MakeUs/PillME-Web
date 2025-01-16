import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from './toggle-switch.tsx';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'ui/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    left: { control: 'text' },
    right: { control: 'text' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.left);

      return (
        <div>
          <Story
            args={{
              ...context.args,
              value,
              onValueChange: setValue,
            }}
          />
          <div
            style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}
          >
            Current state: {value}
          </div>
        </div>
      );
    },
  ],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchFirst: Story = {
  args: {
    left: '증상 AI 검색',
    right: '제품 검색',
  },
  // render: (args) => {
  //   const [checked, setChecked] = useState(false);

  //   return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  // },
};
