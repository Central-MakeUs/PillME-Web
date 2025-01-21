import type { Meta, StoryObj } from '@storybook/react';
import { DeleteCir } from '../../assets/index';
import { Input } from './input';
import { InputContainer } from './input-container';
import { InputRightElement } from './input-element';

const meta: Meta<typeof Input> = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyInput: Story = {
  render: (args) => (
    <InputContainer>
      <Input {...args} />
    </InputContainer>
  ),
};

export const InputWithButton: Story = {
  render: (args) => (
    <InputContainer
      style={{
        width: '335px',
      }}
    >
      <Input {...args} />
      <InputRightElement>
        <DeleteCir />
      </InputRightElement>
    </InputContainer>
  ),
};

export const ErrorInput: Story = {
  args: {
    variant: 'error',
    value: '에러 텍스트입니다',
  },
  render: (args) => (
    <InputContainer>
      <Input {...args} />
    </InputContainer>
  ),
};

export const DisabledInput: Story = {
  args: {
    value: 'disabled',
    disabled: true,
  },
  render: (args) => (
    <InputContainer>
      <Input {...args} />
    </InputContainer>
  ),
};
