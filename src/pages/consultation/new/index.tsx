import { zodResolver } from '@hookform/resolvers/zod';
import { useFunnel } from '@use-funnel/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { ArrowLeft } from '@/assets';
import { AppBar } from '@/ui/app-bar';
import { Form } from '@/ui/form';
import { PageLayout } from '@/ui/layout/page-layout';
import { Step1 } from './components/step1';
import { Step2 } from './components/step2';
import * as styles from './page.css';

const step1Schema = z.object({
  height: z.string().refine((val) => /^\d+$/.test(val)),
  weight: z.string().refine((val) => /^\d+$/.test(val)),
  disease: z.string().max(1000, '1000자 이내로 작성해주세요.').optional(),
  medication: z.string().max(1000, '1000자 이내로 작성해주세요.').optional(),
});

const step2Schema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z
    .string()
    .min(1, '상담 내용을 입력해주세요.')
    .max(1000, '1000자 이내로 작성해주세요.'),
});

const consultationSchema = step1Schema.merge(step2Schema);
export type ConsultationFormData = z.infer<typeof consultationSchema>;

const options = {
  id: 'consultation',
  initial: { step: 'Step1', context: {} },
};

export const ConsultationNewPage = () => {
  const navigate = useNavigate();
  const funnel = useFunnel(options);

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: 'onChange',
    defaultValues: {
      height: '',
      weight: '',
      disease: '',
      medication: '',
      title: '',
      content: '',
    },
  });

  const onSubmit: SubmitHandler<ConsultationFormData> = (
    data: ConsultationFormData,
  ) => {
    console.log('상담 신청서 데이터:', data);
    navigate('/consultation/new/complete');
  };

  return (
    <PageLayout
      header={
        <AppBar
          left={<ArrowLeft onClick={() => navigate(-1)} />}
          variant="page"
        >
          상담 신청서 작성
        </AppBar>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <funnel.Render
            Step1={({ history }) => (
              <Step1 onNext={() => history.push('Step2', {})} />
            )}
            Step2={() => <Step2 />}
          />
        </form>
      </Form>
    </PageLayout>
  );
};
