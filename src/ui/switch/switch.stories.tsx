import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'ui/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchFirst: Story = {
  args: {
    left: '증상 AI 검색',
    right: '제품 검색',
  },
};
