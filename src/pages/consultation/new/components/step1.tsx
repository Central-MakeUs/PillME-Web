import { useFormContext } from 'react-hook-form';
import { Button } from '@/ui/button';
import { FormField, FormItem, FormLabel } from '@/ui/form';
import { Input, InputContainer } from '@/ui/input';
import * as styles from './step.css';

type Step1Props = {
  onNext: () => void;
};

export const Step1 = (props: Step1Props) => {
  const { onNext } = props;

  const {
    trigger,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const diseaseValue = watch('disease', '');
  const medicationValue = watch('medication', '');

  const onClickNextButton = async () => {
    const isValid = await trigger(['height', 'weight']);
    if (isValid) {
      onNext();
    }
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          정확한 상담을 위해
          <br />
          상담자의 정보를 알려주세요
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.box}>
            <FormField
              control={control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>키(cm)</FormLabel>
                  <InputContainer>
                    <Input
                      {...field}
                      variant={errors.height ? 'error' : 'default'}
                      placeholder="ex) 170"
                    />
                  </InputContainer>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>몸무게(kg)</FormLabel>
                  <InputContainer>
                    <Input
                      {...field}
                      variant={errors.weight ? 'error' : 'default'}
                      placeholder="ex) 70"
                    />
                  </InputContainer>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="disease"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  기저 질환이 있다면 질환명을 입력해 주세요 (선택)
                </FormLabel>
                <InputContainer>
                  <textarea
                    {...field}
                    placeholder="ex) 고혈압, 당뇨"
                    maxLength={1000}
                    className={styles.textArea}
                  />
                  <div
                    className={styles.inputCount}
                  >{`${diseaseValue.length}/1000`}</div>
                </InputContainer>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="medication"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  복용 중인 의약품의 명칭을 적어주세요 (선택)
                </FormLabel>
                <InputContainer>
                  <textarea
                    {...field}
                    placeholder="ex) 암로디핀(고혈압 치료제), 세티리진"
                    maxLength={1000}
                    className={styles.textArea}
                  />
                  <div
                    className={styles.inputCount}
                  >{`${medicationValue.length}/1000`}</div>
                </InputContainer>
              </FormItem>
            )}
          />
        </div>
      </section>
      <Button
        type="button"
        className={styles.button}
        onClick={onClickNextButton}
      >
        다음
      </Button>
    </>
  );
};
