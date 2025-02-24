import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useFunnel } from '@use-funnel/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { joinAPI } from '@/apis/mutation/auth';
import { ArrowLeft } from '@/assets';
import { LOCAL_STORAGE } from '@/constants';
import { AppBar } from '@/ui/app-bar';
import { Form } from '@/ui/form';
import { PageLayout } from '@/ui/layout/page-layout';
import { useShowCustomToast } from '@/ui/toast/toast';
import { BirthStepFunnel } from '../userinfo/components/BirthStepFunnel';
import { GenderStepFunnel } from '../userinfo/components/GenderStepFunnel';
import { NameStepFunnel } from '../userinfo/components/NameStepFunnel';
import { birth, gender, name } from '../userinfo/schema';
import { EnterStepFunnel } from './components/EnterStepFunnel';
import { PasswordStepFunnel } from './components/PasswordStepFunnel';
import { VerificationStepFunnel } from './components/VerificationStepFunnel';
import * as styles from './page.styles.css';
import { registerOptionalState, registerSteps } from './registerStepState';
import { code, confirmPassword, email, password } from './schema';

const registerSchema = z
  .object({
    email,
    code,
    password,
    confirmPassword,
    name,
    birth,
    gender,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

const options = {
  id: 'register',
  initial: {
    context: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      name: '',
      birth: '',
      gender: 'NONE',
    } satisfies registerOptionalState,
    step: 'EnterStep',
  } as const,
  steps: registerSteps,
};

export const RegisterPage = () => {
  const funnel = useFunnel(options);
  const navigate = useNavigate();
  const currentStep = funnel.step;

  const toast = useShowCustomToast();

  const { mutate } = useMutation({
    mutationFn: joinAPI,
    onSuccess: ({ data: { accessToken } }) => {
      window.localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken);
      navigate('/home', { replace: true });
    },
    onError: (error) => {
      console.error(error);
      toast('로그인에 실패하셨어요', 'error');
    },
  });

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      name: '',
      birth: '',
      gender: 'NONE',
    },
  });

  const goBack = () => {
    if (currentStep !== 'EnterStep') {
      funnel.history.back();
    } else {
      navigate(-1);
    }
  };

  const onSubmit: SubmitHandler<RegisterSchema> = ({
    email,
    password,
    name,
    birth,
    gender,
  }) => {
    if (gender === 'NONE') {
      form.setError('gender', { message: '성별을 입력해주세요' });
      return;
    }

    mutate({
      email,
      password,
      birthDate: birth,
      gender,
      nickname: name,
    });
  };

  return (
    <PageLayout
      header={<AppBar left={<ArrowLeft onClick={goBack} />} variant="page" />}
    >
      <Form {...form}>
        <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
          <funnel.Render
            EnterStep={({ history }) => (
              <EnterStepFunnel
                onNext={(email) => history.push('VerificationStep', { email })}
              />
            )}
            VerificationStep={({ history, context }) => (
              <VerificationStepFunnel
                onNext={(code) =>
                  history.push('PasswordStep', {
                    email: context.email,
                    code,
                  })
                }
                email={context.email}
              />
            )}
            PasswordStep={({ history, context }) => (
              <PasswordStepFunnel
                onNext={(password) =>
                  history.push('NameStep', { ...context, password })
                }
              />
            )}
            NameStep={({ history, context }) => (
              <NameStepFunnel
                onNext={(name) =>
                  history.push('BirthStep', { ...context, name })
                }
              />
            )}
            BirthStep={({ history, context }) => (
              <BirthStepFunnel
                onNext={(birth) =>
                  history.push('GenderStep', { ...context, birth })
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
