import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { updateUserInfoAPI } from '@/apis/user';
import { DeleteCir } from '@/assets';
import { name } from '@/pages/userinfo/schema';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Button } from '@/ui/button';
import {
  Form,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
} from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import * as styles from './bottom-sheet.css';

export const nameSchema = z.object({
  name,
});

type NameSchema = z.infer<typeof nameSchema>;

type NickNameBottomSheetProps = {
  initialNickName: string;
  open: boolean;
  onOpenChange: VoidFunction;
};

export const NickNameBottomSheet = (props: NickNameBottomSheetProps) => {
  const { initialNickName, open, onOpenChange } = props;

  const toast = useShowCustomToast();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserInfoAPI,
    onSuccess: () => {
      toast('이름 변경에 성공하였습니다', 'success');
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      onOpenChange();
    },
  });

  const form = useForm<NameSchema>({
    defaultValues: {
      name: initialNickName,
    },
  });
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    setFocus,
  } = form;

  const name = useWatch({
    control,
    name: 'name',
    defaultValue: initialNickName,
  });

  const onSubmit: SubmitHandler<NameSchema> = (data) => {
    console.log(data);
    mutate({
      nickname: name,
    });
  };

  const disabled = name.length === 0 || isPending;

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <BottomSheet.Root
      open={open}
      onOpenChange={() => {
        onOpenChange();
        setValue('name', initialNickName);
      }}
    >
      <BottomSheet.Overlay />
      <BottomSheet.Content className={styles.container}>
        <BottomSheet.Handle />
        <Spacer size={20} />
        <BottomSheet.Title>닉네임 변경</BottomSheet.Title>
        <Spacer size={32} />

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>닉네임</FormLabel>
                  <InputContainer>
                    <Input
                      {...field}
                      variant={errors.name ? 'error' : 'default'}
                      placeholder="한글, 영어, 숫자만 사용(최대 10자)"
                    />
                    {field.value && (
                      <InputRightElement onClick={() => setValue('name', '')}>
                        <DeleteCir />
                      </InputRightElement>
                    )}
                  </InputContainer>
                  <FormErrorMessage />
                </FormItem>
              )}
            />
            <div className={styles.buttonContainer}>
              <Button
                size="large"
                className={styles.button}
                disabled={disabled}
              >
                완료
              </Button>
            </div>
          </form>
        </Form>
      </BottomSheet.Content>
    </BottomSheet.Root>
  );
};
