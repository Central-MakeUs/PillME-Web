import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DeleteCir } from '../../assets/index';
import { Input } from '../input/input';
import { InputContainer } from '../input/input-container';
import { InputRightElement } from '../input/input-element';
import { FormErrorMessage } from './form-error-message';
import { Form, FormField } from './form-field';
import { FormItem } from './form-item';
import { FormLabel } from './form-label';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const meta: Meta<typeof FormField> = {
  title: 'ui/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: '',
        },
      });

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
      }

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Story
              args={{
                ...context.args,
                control: form.control as any,
              }}
            />
            {/* 
            // error State는 이렇게 관리, storybook에선 보여주기 힘듬
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>폼 라밸</FormLabel>
                  <InputContainer>
                    {
                      <Input
                        {...field}
                        variant={
                          form.formState.errors.username ? 'error' : 'default'
                        }
                      />
                    }
                    {field.value && (
                      <InputRightElement>
                        <DeleteCir />
                      </InputRightElement>
                    )}
                  </InputContainer>
                  <FormErrorMessage />
                </FormItem>
              )}
            /> */}
            <button hidden />
          </form>
        </Form>
      );
    },
  ],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  render: (args) => (
    <FormField
      control={args.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>폼 라밸</FormLabel>
          <InputContainer>
            <Input {...field} />
            {field.value && (
              <InputRightElement>
                <DeleteCir />
              </InputRightElement>
            )}
          </InputContainer>
          <FormErrorMessage />
        </FormItem>
      )}
    />
  ),
};

export const required: Story = {
  render: (args) => (
    <FormField
      control={args.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel required>폼 라밸</FormLabel>
          <InputContainer>
            <Input {...field} />
            {field.value && (
              <InputRightElement>
                <DeleteCir />
              </InputRightElement>
            )}
          </InputContainer>
          <FormErrorMessage />
        </FormItem>
      )}
    />
  ),
};

export const WithoutLabel: Story = {
  render: (args) => (
    <FormField
      control={args.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <InputContainer>
            <Input {...field} />
            {field.value && (
              <InputRightElement>
                <DeleteCir />
              </InputRightElement>
            )}
          </InputContainer>
          <FormErrorMessage />
        </FormItem>
      )}
    />
  ),
};

export const disabledField: Story = {
  render: (args) => (
    <FormField
      control={args.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <InputContainer>
            <Input {...field} disabled />
            {field.value && (
              <InputRightElement>
                <DeleteCir />
              </InputRightElement>
            )}
          </InputContainer>
          <FormErrorMessage />
        </FormItem>
      )}
    />
  ),
};
