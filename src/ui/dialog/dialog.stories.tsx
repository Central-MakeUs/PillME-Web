import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';

const meta: Meta<typeof Dialog> = {
  title: 'ui/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    action: {
      control: 'radio',
      options: ['single', 'danger', 'default'],
    },
    leftButtonText: { control: 'text' },
    rightButtonText: { control: 'text' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
            .open-dialog-button {
              background-color: #4f46e5;
              color: white;
              padding: 10px 16px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: bold;
              border: none;
              cursor: pointer;
              transition: background-color 0.2s;
            }

          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDialog: Story = {
  args: {
    trigger: <button className="open-dialog-button">성분 분석</button>,
    title: '타이틀 자리입니다.',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'default',
    leftButtonText: 'button',
    rightButtonText: 'button',
    onConfirm: () => alert('dialog'),
  },
};

export const DangerDialog: Story = {
  args: {
    trigger: <button className="open-dialog-button danger">성분 분석</button>,
    title: '타이틀 자리입니다.',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'danger',
    leftButtonText: 'button',
    rightButtonText: 'button',
    onConfirm: () => alert('dialog'),
  },
};

export const SingleButtonDialog: Story = {
  args: {
    trigger: <button className="open-dialog-button">성분 분석</button>,
    title: '타이틀 자리입니다.',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'single',
    rightButtonText: 'button',
    onConfirm: () => alert('dialog'),
  },
};
