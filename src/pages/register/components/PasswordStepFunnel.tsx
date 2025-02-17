import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { DeleteCir, DeleteLarge } from '@/assets';
import { BottomSheet } from '@/ui/bottom-sheet/bottom-sheet';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import { Spacer } from '@/ui/spacer/spacer';
import { AGREEMENT_LIST } from '../agreement';
import * as agreementStyles from '../agreementBottomSheet.css';
import * as styles from '../page.styles.css';
import { AgreeMent } from './AgreeMent';

type PasswordStepFunnelProps = {
  onNext: (password: string) => void;
};

export const PasswordStepFunnel = (props: PasswordStepFunnelProps) => {
  const { onNext } = props;

  const {
    setFocus,
    setValue,
    trigger,
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

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

  const disabled = !!errors.password || !!errors.confirmPassword;

  const [isOpen, setIsOpen] = useState(false);

  const [agreementList, setAgreementList] = useState(
    AGREEMENT_LIST.map((agreement) => ({
      title: agreement,
      checked: false,
    })),
  );

  const toggleCheck = ({ target: { id } }: ChangeEvent) => {
    const updatedAgreementList = agreementList.map((agreement, index) =>
      index === Number(id)
        ? { ...agreement, checked: !agreement.checked }
        : agreement,
    );

    setAgreementList(updatedAgreementList);
  };

  const toggleAllCheck = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setAgreementList(
      agreementList.map((agreement) => ({ ...agreement, checked })),
    );
  };

  const allChecked = agreementList.every(({ checked }) => Boolean(checked));

  const handleNext = async () => {
    const isValid = await trigger(['password', 'confirmPassword']);

    if (!isValid) {
      return;
    }

    onNext(getValues('password'));
  };

  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

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

      <Button
        disabled={disabled}
        className={styles.FullWidth}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        입력 완료
      </Button>

      <BottomSheet.Root open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          <section className={agreementStyles.container}>
            <header className={agreementStyles.header}>
              <BottomSheet.Title asChild>
                <h4>약관에 동의해주세요</h4>
              </BottomSheet.Title>
              <BottomSheet.Close className={agreementStyles.closeButton}>
                <DeleteLarge />
              </BottomSheet.Close>
            </header>
            <AgreeMent
              id={'all'}
              onChange={toggleAllCheck}
              label="모두 동의합니다"
              checked={allChecked}
            />
            <div className={agreementStyles.separator} />
            <div className={agreementStyles.checkboxList}>
              {agreementList.map(({ title, checked }, index) => (
                <AgreeMent
                  key={index}
                  id={String(index)}
                  onChange={toggleCheck}
                  label={title}
                  checked={checked}
                />
              ))}
            </div>
            <Spacer size={3} />
            <Button disabled={!allChecked} type="button" onClick={handleNext}>
              다음
            </Button>
            <Spacer size={7} />
          </section>
        </BottomSheet.Content>
      </BottomSheet.Root>
    </>
  );
};
