import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogAction } from './dialog.tsx';

const meta: Meta<typeof Dialog> = {
  title: 'ui/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    action: {
      control: 'select',
      options: ['single', 'danger', 'default'],
    },
    open: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: '타이틀자리입니다',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'default',
    leftButtonText: 'button',
    rightButtonText: 'button',
    open: true,
  },
  render: (args) => <Dialog {...args} onOpenChange={() => {}} />,
};

export const Danger: Story = {
  args: {
    title: '타이틀자리입니다',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'danger',
    leftButtonText: 'button',
    rightButtonText: 'button',
    open: true,
  },
  render: (args) => <Dialog {...args} onOpenChange={() => {}} />,
};

export const Single: Story = {
  args: {
    title: '타이틀자리입니다',
    description: '제품을 삭제할 시 복용 약 성분 분석에 반영돼요.',
    action: 'single',
    rightButtonText: 'button',
    open: true,
  },
  render: (args) => <Dialog {...args} onOpenChange={() => {}} />,
};

const WithStateDialog = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<DialogAction>('default');

  return (
    <div>
      <button
        onClick={() => {
          setAction('default');
          setOpen(true);
        }}
      >
        Default Dialog
      </button>
      <button
        onClick={() => {
          setAction('danger');
          setOpen(true);
        }}
      >
        Danger Dialog
      </button>
      <button
        onClick={() => {
          setAction('single');
          setOpen(true);
        }}
      >
        Single Dialog
      </button>

      <Dialog
        title="타이틀자리입니다"
        description="제품을 삭제할 시 복용 약 성분 분석에 반영돼요."
        action={action}
        leftButtonText="button"
        rightButtonText="button"
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => {
          alert('확인 버튼 클릭됨!');
          setOpen(false);
        }}
      />
    </div>
  );
};

export const WithState: Story = {
  render: () => <WithStateDialog />,
};
