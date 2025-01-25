import { KeyboardEventHandler, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import * as styles from '../page.styles.css';

type BirthStepFunnelProps = {
  onNext: (birth: string) => void;
};

// TODO onChange시 yyyy.mm.dd 포맷으로 변경 필요
export const BirthStepFunnel = (props: BirthStepFunnelProps) => {
  const { onNext } = props;

  const {
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

    if (errors.birth) {
      return;
    }

    onNext(birth);
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
