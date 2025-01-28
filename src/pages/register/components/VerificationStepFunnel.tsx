import { KeyboardEventHandler, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import OtpInput from 'react-otp-input';
import { ErrorCir } from '@/assets';
import { Button } from '@/ui/button';
import { ButtonText } from '@/ui/button-text';
import { FormField } from '@/ui/form';
import * as styles from '../page.styles.css';

type VerificationStepProps = {
  onNext: (code: string) => void;
};

export const VerificationStepFunnel = (props: VerificationStepProps) => {
  const { onNext } = props;

  const {
    setValue,
    watch,
    setFocus,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const code = watch('code', '');

  useEffect(() => {
    setFocus('code');
  }, [setFocus]);

  const handleOtpChange = (value: string) => {
    setValue('code', value);
  };

  const onClickNextButton = async () => {
    const isValid = await trigger('code');

    if (!isValid) {
      setValue('code', '');
      return;
    }

    onNext(code);
  };

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    if (event.key !== 'Enter') return;

    const isValid = await trigger('code');

    if (!isValid) {
      setValue('code', '');
      return;
    }

    onNext(code);
  };

  const disabled = code.length !== 6;

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
          onClick={() => alert('인증코드 재전송 API 추가')}
        >
          인증 코드 재전송
        </ButtonText>
      </section>
      <Button
        type="button"
        onClick={onClickNextButton}
        disabled={disabled}
        className={styles.FullWidth}
      >
        입력 완료
      </Button>
    </>
  );
};
