import { KeyboardEventHandler, useEffect } from 'react';
import { isPast, isValid, parse } from 'date-fns';
import { useFormContext } from 'react-hook-form';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import * as styles from '../page.styles.css';

type BirthStepFunnelProps = {
  onNext: (birth: string) => void;
};

export const BirthStepFunnel = (props: BirthStepFunnelProps) => {
  const { onNext } = props;

  const {
    setError,
    setFocus,
    getValues,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const name = getValues('name');
  const birth = getValues('birth');

  const onClickNextButton = async () => {
    await trigger('birth');

    checkDate(getValues('birth'));

    if (errors.birth) {
      return;
    }

    onNext(birth);
  };

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    const isNotEnterKey = event.key !== 'Enter';

    if (isNotEnterKey) {
      return;
    }

    await trigger('birth');

    checkDate(getValues('birth'));

    if (errors.birth) {
      return;
    }

    onNext(birth);
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

  useEffect(() => {
    setFocus('birth');
  }, []);

  return (
    <>
      <section className={styles.formBody({ gap: 30 })}>
        <div className={styles.header}>
          <h1 className={styles.title}>{name}님의 생일을 알려주세요</h1>
          <p className={styles.description}>
            더 정확한 건강기능식품을 추천을 도와드려요
          </p>
        </div>

        <div className={styles.formFieldGroup}>
          <FormField
            control={control}
            name="birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>생년월일 (8자리)</FormLabel>
                <InputContainer>
                  <Input
                    {...field}
                    variant={errors.birth ? 'error' : 'default'}
                    onKeyDown={onEnterKey}
                    placeholder="YYYY.MM.DD"
                    onChange={({ target: { value } }) => {
                      const formattedDate = formatBirthDate(value);
                      field.onChange(formattedDate);
                    }}
                  />
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
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <InputContainer>
                  <Input {...field} disabled />
                </InputContainer>
                <FormErrorMessage />
              </FormItem>
            )}
          />
        </div>
      </section>

      <Button
        type="button"
        onClick={onClickNextButton}
        disabled={disabled}
        className={styles.button}
      >
        입력 완료
      </Button>
    </>
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
