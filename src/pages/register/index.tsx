import { zodResolver } from '@hookform/resolvers/zod';
import { useFunnel } from '@use-funnel/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { ArrowLeft } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { Form } from '@/ui/form';
import { PageLayout } from '@/ui/layout/page-layout';
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
    } satisfies registerOptionalState,
    step: 'EnterStep',
  } as const,
  steps: registerSteps,
};

export const RegisterPage = () => {
  const funnel = useFunnel(options);
  const navigate = useNavigate();
  const currentStep = funnel.step;

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
  });

  const goBack = () => {
    if (currentStep !== 'EnterStep') {
      funnel.history.back();
    }
  };

  const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
    console.log(data);

    navigate('/home', { replace: true });
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
            PasswordStep={() => <PasswordStepFunnel />}
          />
        </form>
      </Form>
    </PageLayout>
  );
};
