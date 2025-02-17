import { KeyboardEventHandler, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { checkDuplicatedEmailAPI, sendEmailCodeAPI } from '@/apis/auth';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import { useShowCustomToast } from '@/ui/toast/toast';
import * as styles from '../page.styles.css';

type EnterStepProps = { onNext: (email: string) => void };

export const EnterStepFunnel = (props: EnterStepProps) => {
  const { onNext } = props;
  const toast = useShowCustomToast();

  const {
    setFocus,
    reset,
    trigger,
    watch,
    control,
    setError,
    formState: { errors },
  } = useFormContext();

  const email = watch('email', '');

  const { mutate } = useMutation({
    mutationFn: async (email: string) => {
      await checkDuplicatedEmailAPI({ email });
      await sendEmailCodeAPI({ email });
    },
    onSuccess: () => {
      onNext(email);
    },
    onError: (error) => {
      setFocus('email');

      const isDuplicatedError = error.message.includes('check-duplicated');

      if (isDuplicatedError) {
        setError('email', {
          type: 'manual',
          message: '이미 사용 중인 이메일입니다.',
        });
        return;
      }

      toast('인증 코드 전송에 실패했어요.', 'error');
    },
  });

  const handleNext = async () => {
    await trigger('email');

    if (errors.email) {
      return;
    }

    mutate(email);
  };

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    const isNotEnterKey = event.key !== 'Enter';

    if (isNotEnterKey) {
      return;
    }

    handleNext();
  };

  const disabled = email.trim().length === 0 || !!errors.email;

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          본인인증을 위한 이메일을
          <br /> 입력해주세요
          <p className={styles.subTitle}>
            입력하신 이메일은 서비스 로그인에도 사용돼요
          </p>
        </div>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className={styles.FullWidth}>
              <FormLabel>이메일</FormLabel>
              <InputContainer>
                <Input
                  {...field}
                  variant={errors.email ? 'error' : 'default'}
                  onKeyDown={onEnterKey}
                  placeholder="인증코드를 받을 이메일을 입력해주세요"
                />
                {field.value && (
                  <InputRightElement>
                    <DeleteCir
                      onClick={() => {
                        reset();
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
      <Button
        type="button"
        onClick={handleNext}
        disabled={disabled}
        className={styles.FullWidth}
      >
        전송 요청
      </Button>
    </>
  );
};
