import { KeyboardEventHandler, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import * as styles from '../page.styles.css';

type NameStepFunnelProps = {
  onNext: (name: string) => void;
};

export const NameStepFunnel = (props: NameStepFunnelProps) => {
  const { onNext } = props;

  const {
    setFocus,
    getValues,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const name = getValues('name');

  const onClickNextButton = async () => {
    await trigger('name');

    if (errors.name) {
      return;
    }

    onNext(name);
  };

  const onEnterKey: KeyboardEventHandler<HTMLInputElement> = async (event) => {
    const isNotEnterKey = event.key !== 'Enter';

    if (isNotEnterKey) {
      return;
    }

    await trigger('name');

    if (errors.name) {
      return;
    }

    onNext(name);
  };

  const disabled = name.length === 0;

  useEffect(() => {
    setFocus('name');
  }, []);

  return (
    <>
      <section className={styles.formBody({ gap: 26 })}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            정말 반가워요!
            <br />
            어떻게 불러드릴까요?
          </h1>
        </div>

        <div className={styles.formFieldGroup}>
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
                    onKeyDown={onEnterKey}
                    placeholder="한글, 영어, 숫자만 사용(최대 10자)"
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
