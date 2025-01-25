import { useFormContext } from 'react-hook-form';
import { DeleteCir } from '@/assets';
import { Button } from '@/ui/button';
import { FormErrorMessage, FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer, InputRightElement } from '@/ui/input';
import { UserInfoSchema } from '..';
import * as styles from '../page.styles.css';

//TODO select 컴포넌트 추가 필요
export const GenderStepFunnel = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<UserInfoSchema>();

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
            control={control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>성별</FormLabel>
                <InputContainer>
                  <Input
                    {...field}
                    variant={errors.gender ? 'error' : 'default'}
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
