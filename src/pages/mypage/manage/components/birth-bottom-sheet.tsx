import { isPast, isValid, parse } from 'date-fns';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { DeleteCir } from '@/assets';
import { birth } from '@/pages/userinfo/schema';
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
import * as styles from './bottom-sheet.css';

const birthSchema = z.object({
  birth,
});

type BirthSchema = z.infer<typeof birthSchema>;

type BirthBottomSheetProps = {
  initialBirth: string;
  open: boolean;
  onOpenChange: VoidFunction;
};

export const BirthBottomSheet = (props: BirthBottomSheetProps) => {
  const { initialBirth, open, onOpenChange } = props;

  const form = useForm<BirthSchema>({
    defaultValues: {
      birth: initialBirth,
    },
  });
  const {
    control,
    formState: { errors },
    getValues,
    setError,
    setValue,
    handleSubmit,
  } = form;

  const birth = useWatch({
    control,
    name: 'birth',
    defaultValue: initialBirth,
  });

  const onSubmit: SubmitHandler<BirthSchema> = (data) => {
    console.log(data);

    checkDate(getValues('birth'));

    if (errors.birth) {
      return;
    }
  };

  const checkDate = (date: string) => {
    if (!/^\d{4}\.\d{2}\.\d{2}$/.test(date)) {
      setError('birth', {
        type: 'inValidDate',
        message: 'YYYY.MM.DD 형식으로 입력해주세요.',
      });
      return;
    }

    const parsedDate = parse(date, 'yyyy.MM.dd', new Date());

    if (!isValid(parsedDate)) {
      setError('birth', {
        type: 'inValidDate',
        message: '잘못된 날짜에요.',
      });
      return;
    }

    if (!isPast(parsedDate)) {
      setError('birth', {
        type: 'inValidDate',
        message: '과거의 날짜만 입력할 수 있어요.',
      });
      return;
    }
  };

  const disabled = birth.length === 0;

  return (
    <BottomSheet.Root
      open={open}
      onOpenChange={() => {
        onOpenChange();
        setValue('birth', initialBirth);
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
              name="birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>생년월일 (8자리)</FormLabel>
                  <InputContainer>
                    <Input
                      {...field}
                      variant={errors.birth ? 'error' : 'default'}
                      placeholder="YYYY.MM.DD"
                      onChange={({ target: { value } }) => {
                        const formattedDate = formatBirthDate(value);
                        field.onChange(formattedDate);
                      }}
                    />
                    {field.value && (
                      <InputRightElement onClick={() => setValue('birth', '')}>
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

const formatBirthDate = (value: string) => {
  const numbers = value.replace(/\D/g, '');

  if (numbers.length > 8) {
    return value.slice(0, -1);
  }

  if (numbers.length < value.length) {
    return numbers;
  }

  const format =
    numbers.length <= 6 ? /(\d{4})(\d{1,2})/ : /(\d{4})(\d{2})(\d{2})/;
  const template = numbers.length <= 6 ? '$1.$2' : '$1.$2.$3';

  return numbers.replace(format, template);
};
