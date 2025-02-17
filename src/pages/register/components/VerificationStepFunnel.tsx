import { KeyboardEventHandler, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import OtpInput from 'react-otp-input';
import { sendEmailCodeAPI, sendVertifyEmailCodeAPI } from '@/apis/auth';
import { ErrorCir } from '@/assets';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { FormField } from '@/ui/form';
import { useShowCustomToast } from '@/ui/toast/toast';
import * as styles from '../page.styles.css';

type VerificationStepProps = {
  onNext: (code: string) => void;
  email: string;
};

export const VerificationStepFunnel = (props: VerificationStepProps) => {
  const { onNext, email } = props;

  const toast = useShowCustomToast();

  const {
    setValue,
    watch,
    setFocus,
    trigger,
    setError,
    control,
    formState: { errors },
  } = useFormContext();

  const code = watch('code', '');

  const { mutate: sendEmailCodeMutate } = useMutation({
    mutationFn: sendEmailCodeAPI,
    onSuccess: () => {
      toast('인증 코드를 입력해주세요', 'success');
    },
    onError: (error) => {
      console.error(error);
      toast('인증 코드 전송에 실패했어요', 'error');
    },
  });

  const { mutate: vertifyEmailMutate } = useMutation({
    mutationFn: sendVertifyEmailCodeAPI,
    onSuccess: () => {
      onNext(code);
    },
    onError: (error) => {
      console.error(error);
      setFocus('code');
      setError('code', {
        type: 'manual',
        message: '정확한 인증 코드를 입력해주세요',
      });
    },
  });

  const handleOtpChange = (value: string) => {
    setValue('code', value);
  };

  const handleNext = async () => {
    const isValid = await trigger('code');

    if (!isValid) {
      setValue('code', '');
      return;
    }

    vertifyEmailMutate(code);
  };

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    if (event.key !== 'Enter') return;

    handleNext();
  };

  const onClickSendEmailCodeButton = () => {
    sendEmailCodeMutate({ email });
  };

  const disabled = code.length !== 6;

  useEffect(() => {
    setFocus('code');
  }, [setFocus]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          이메일로 전송된
          <br />
          인증 코드를 입력해주세요
        </div>
        <FormField
          control={control}
          name="code"
          render={() => (
            <OtpInput
              value={code}
              onChange={handleOtpChange}
              numInputs={6}
              shouldAutoFocus
              containerStyle={{ gap: '13px' }}
              inputStyle={{
                width: '45px',
                height: '60px',
                borderRadius: '6px',
                border: '1px solid #3366ff',
                marginTop: '15px',
              }}
              renderInput={(props) => (
                <input {...props} onKeyDown={onEnterKey} />
              )}
            />
          )}
        />
        {errors.code?.message && (
          <div className={styles.errorMessage}>
            <ErrorCir />
            {errors.code.message.toString()}
          </div>
        )}
        <ButtonText
          icon
          className={styles.buttonText}
          onClick={onClickSendEmailCodeButton}
        >
          인증 코드 재전송
        </ButtonText>
      </section>
      <Button
        type="button"
        onClick={handleNext}
        disabled={disabled}
        className={styles.FullWidth}
      >
        입력 완료
      </Button>
    </>
  );
};
