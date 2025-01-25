import { zodResolver } from '@hookform/resolvers/zod';
import { useFunnel } from '@use-funnel/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { ArrowLeft } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { Form } from '@/ui/form';
import { PageLayout } from '../../ui/layout/page-layout';
import { BirthStepFunnel } from './components/BirthStepFunnel';
import { GenderStepFunnel } from './components/GenderStepFunnel';
import { NameStepFunnel } from './components/NameStepFunnel';
import * as styles from './page.styles.css';
import { UserInfoOptionalState, userInfoSteps } from './userInfoStepState';

export const userInfoSchema = z.object({
  name: z
    .string()
    .min(1, '이름을 입력해주세요.')
    .regex(
      /^[가-힣a-zA-Z0-9]{1,10}$/,
      '띄어쓰기 없이 한글, 영문, 숫자 최대 10글자만 가능해요.',
    ),
  birth: z.string(),
  gender: z.enum(['MALE', 'FEMALE', 'NONE']),
});

export type UserInfoSchema = z.infer<typeof userInfoSchema>;

const options = {
  id: 'userInfo',
  initial: {
    context: {
      name: '',
      birth: '',
      gender: 'NONE',
    } satisfies UserInfoOptionalState,
    step: 'NameStep',
  } as const,
  steps: userInfoSteps,
};

export const UserInfoPage = () => {
  const funnel = useFunnel(options);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const form = useForm<UserInfoSchema>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      name: '',
      birth: '',
      gender: 'NONE',
    },
  });

  const onSubmit: SubmitHandler<UserInfoSchema> = (data) => {
    console.log(data);
    navigate('home');
  };

  const hasPrevStep = funnel.step !== 'NameStep';

  return (
    <PageLayout
      header={
        <AppBar
          variant="page"
          left={hasPrevStep && <ArrowLeft onClick={handleBack} />}
        />
      }
    >
      <Form {...form}>
        <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
          <funnel.Render
            NameStep={({ history }) => (
              <NameStepFunnel
                onNext={(name) => history.push('BirthStep', { name })}
              />
            )}
            BirthStep={({ history, context }) => (
              <BirthStepFunnel
                onNext={(birth) =>
                  history.push('GenderStep', { name: context.name, birth })
                }
              />
            )}
            GenderStep={() => <GenderStepFunnel />}
          />
        </form>
      </Form>
    </PageLayout>
  );
};
