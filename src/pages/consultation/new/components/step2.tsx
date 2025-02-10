import { useFormContext } from 'react-hook-form';
import { Button } from '@/ui/button';
import { FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer } from '@/ui/input';
import * as styles from './step.css';

export const Step2 = () => {
  const {
    watch,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const contentValue = watch('content', '');

  const onClickNextButton = async () => {
    const isValid = await trigger(['title', 'content']);
    if (!isValid) return;
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          약사님과 상담하고자 하는
          <br />
          내용을 알려주세요
        </div>
        <div className={styles.inputContainer}>
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>제목</FormLabel>
                <InputContainer>
                  <Input
                    {...field}
                    variant={errors.title ? 'error' : 'default'}
                    placeholder="ex) 근육 증가 관련 영양제 상담 요청드립니다."
                  />
                </InputContainer>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>상댐 내용</FormLabel>
                <InputContainer>
                  <textarea
                    {...field}
                    placeholder="ex) 저는 최근 운동을 구준히 하고 있음에도 불구하고 근육 증가가 잘 이루어지지 않는 문제로 고민하고 있습니다. 식단과 운동 루틴은 일정하게 유지하고 있지만, 영양제 보충이 필요할 것 같아 상담을 신청하게 되었습니다."
                    maxLength={1000}
                    className={styles.textArea}
                  />
                  <div
                    className={styles.inputCount}
                  >{`${contentValue.length}/1000`}</div>
                </InputContainer>
              </FormItem>
            )}
          />
        </div>
      </section>
      <Button
        type="submit"
        className={styles.button}
        onClick={onClickNextButton}
      >
        다음
      </Button>
    </>
  );
};
