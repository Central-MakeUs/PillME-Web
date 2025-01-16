import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch.tsx';

const meta: Meta = {
  title: 'ui/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [checked, setChecked] = useState(false);
      return (
        <div>
          <Story
            args={{
              ...context.args,
              checked,
              onCheckedChange: setChecked,
            }}
          />
          {/* 선택적: 현재 상태를 표시 */}
          <div
            style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}
          >
            Current state: {checked ? 'Checked' : 'Unchecked'}
          </div>
        </div>
      );
    },
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchFirst: Story = {
  args: {
    leftLabel: '증상 AI 검색',
    rightLabel: '제품 검색',
  },
  // render: (args) => {
  //   const [checked, setChecked] = useState(false);

  //   return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  // },
};
