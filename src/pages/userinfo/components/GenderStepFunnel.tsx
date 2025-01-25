import { useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useFormContext } from 'react-hook-form';
import { ArrowDrop, Check } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer } from '@/ui/input';
import { UserInfoSchema } from '../index';
import * as styles from '../page.styles.css';

export const GenderStepFunnel = () => {
  const {
    setFocus,
    control,
    formState: { errors },
  } = useFormContext<UserInfoSchema>();

  useEffect(() => {
    setFocus('gender');
  }, []);

  return (
    <>
      <section className={styles.formBody({ gap: 26 })}>
        <div className={styles.header}>
          <h1 className={styles.title}>마지막으로 성별을 알려주세요</h1>
          <p className={styles.description}>
            더 정확한 건강기능식품을 추천을 도와드려요
          </p>
        </div>

        <div className={styles.formFieldGroup}>
          <FormField
            name="gender"
            control={control}
            render={({ field }) => (
              <DropdownMenu.Root>
                <FormItem>
                  <FormLabel>성별</FormLabel>
                  <DropdownMenu.Trigger asChild>
                    <button className={styles.dropdownTrigger}>
                      {formatGenderValueToText(field.value)}
                      <span className={styles.dropdownTriggerIcon}>
                        <ArrowDrop />
                      </span>
                    </button>
                  </DropdownMenu.Trigger>
                </FormItem>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className={styles.dropdownMenuContent}
                    sideOffset={8}
                  >
                    <DropdownMenu.RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <DropdownMenu.RadioItem
                        className={styles.dropdownMenuItem}
                        value="FEMALE"
                      >
                        여성
                        {field.value === 'FEMALE' && (
                          <DropdownMenu.DropdownMenuItemIndicator
                            className={styles.dropdownMenuItemIndicator}
                          >
                            <Check />
                          </DropdownMenu.DropdownMenuItemIndicator>
                        )}
                      </DropdownMenu.RadioItem>
                      <div className={styles.dropdownMenuSeparator} />
                      <DropdownMenu.RadioItem
                        className={styles.dropdownMenuItem}
                        value="MALE"
                      >
                        남성
                        {field.value === 'MALE' && (
                          <DropdownMenu.DropdownMenuItemIndicator
                            className={styles.dropdownMenuItemIndicator}
                          >
                            <Check />
                          </DropdownMenu.DropdownMenuItemIndicator>
                        )}
                      </DropdownMenu.RadioItem>
                      <div className={styles.dropdownMenuSeparator} />
                      <DropdownMenu.RadioItem
                        className={styles.dropdownMenuItem}
                        value="NONE"
                      >
                        선택안함
                        {field.value === 'NONE' && (
                          <DropdownMenu.DropdownMenuItemIndicator
                            className={styles.dropdownMenuItemIndicator}
                          >
                            <Check />
                          </DropdownMenu.DropdownMenuItemIndicator>
                        )}
                      </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            )}
          />

          <FormField
            control={control}
            name="birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>생년월일</FormLabel>
                <InputContainer>
                  <Input
                    {...field}
                    variant={errors.birth ? 'error' : 'default'}
                    disabled
                  />
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

      <Button className={styles.button}>시작하기</Button>
    </>
  );
};

const formatGenderValueToText = (value: UserInfoSchema['gender']) => {
  const genderValueMap = {
    NONE: '선택안함',
    FEMALE: '여성',
    MALE: '남성',
  };

  return genderValueMap[value];
};
