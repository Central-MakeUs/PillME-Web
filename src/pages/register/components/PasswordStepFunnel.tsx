import { KeyboardEventHandler, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import * as styles from '../page.styles.css';

export const PasswordStepFunnel = () => {
  const {
    setFocus,
    setValue,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    const isNotEnterKey = event.key !== 'Enter';

    if (isNotEnterKey) {
      return;
    }

    await trigger('');

    if (errors.confirmPassword) {
      return;
    }
  };

  useEffect(() => {
    setFocus('password');
  }, []);

  const disabled =
    !password || // 비밀번호가 없거나
    !confirmPassword || // 비밀번호 확인이 없거나
    password !== confirmPassword || // 비밀번호가 일치하지 않거나
    !!errors.password || // 비밀번호 오류가 있거나
    !!errors.confirmPassword; // 비밀번호 확인 오류가 있으면 비활성화

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          마지막으로, 사용하실
          <br />
          비밀번호를 입력해주세요
        </div>
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className={styles.FullWidth}>
              <FormLabel>비밀번호</FormLabel>
              <InputContainer>
                <Input
                  {...field}
                  type="password"
                  variant={errors.password ? 'error' : 'default'}
                  onKeyDown={onEnterKey}
                  placeholder="영문/숫자/특수문자를 조합한 8자리 입력"
                />
                {field.value && (
                  <InputRightElement>
                    <DeleteCir
                      onClick={() => {
                        setValue('password', '');
                        trigger(['password', 'confirmPassword']);
                      }}
                    />
                  </InputRightElement>
                )}
              </InputContainer>
              <FormErrorMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className={styles.FullWidth}>
              <FormLabel>비밀번호 재확인</FormLabel>
              <InputContainer>
                <Input
                  {...field}
                  type="password"
                  variant={errors.confirmPassword ? 'error' : 'default'}
                  onKeyDown={onEnterKey}
                  placeholder="비밀번호 재확인 확인해주세요"
                />
                {field.value && (
                  <InputRightElement>
                    <DeleteCir
                      onClick={() => {
                        setValue('confirmPassword', '');
                        trigger(['password', 'confirmPassword']);
                      }}
                    />
                  </InputRightElement>
                )}
              </InputContainer>
              <FormErrorMessage />
            </FormItem>
          )}
        />
      </section>
      <Button disabled={disabled} className={styles.FullWidth}>
        입력 완료
      </Button>
    </>
  );
};
