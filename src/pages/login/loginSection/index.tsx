import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { loginAPI } from '@/apis/mutation/auth';
import { LOCAL_STORAGE } from '@/constants';
import { useShowCustomToast } from '@/ui/toast/toast';
import { DeleteCir, ErrorCir } from '../../../assets';
import { Button } from '../../../ui/button';
import * as styles from './styles.css';

const loginSchema = z.object({
  email: z.string().email('이메일을 형식에 맞게 입력해주세요'),
  password: z.string(),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginSection = () => {
  const navigate = useNavigate();

  const showCustomToast = useShowCustomToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const { mutate } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ data: { accessToken } }) => {
      window.localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken);
      navigate('/home');
    },
    onError: (error) => {
      console.error(error);
      showCustomToast('로그인에 실패하셨어요', 'error');
      setFocus('email');
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  const emailValue = watch('email', '');
  const passwordValue = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.inputTextField}>
        <label className={styles.label}>이메일</label>
        <div className={styles.passwordWrapper}>
          <input
            type="email"
            placeholder="이메일 입력"
            className={styles.input}
            {...register('email')}
          />
          {emailValue.length > 0 && (
            <DeleteCir
              onClick={() => {
                setValue('email', '');
                trigger('email');
              }}
              className={styles.clearButton}
            />
          )}
        </div>
        {errors.email && emailValue.length > 0 && (
          <div className={styles.errorMessage}>
            <ErrorCir />
            {errors.email.message}
          </div>
        )}
      </div>

      <div className={styles.inputTextField}>
        <label className={styles.label}>비밀번호</label>
        <div className={styles.passwordWrapper}>
          <input
            type="password"
            placeholder="비밀번호 입력"
            className={styles.input}
            {...register('password')}
          />
          {passwordValue.length > 0 && (
            <DeleteCir
              onClick={() => {
                setValue('password', '');
                trigger('password');
              }}
              className={styles.clearButton}
            />
          )}
        </div>
      </div>

      {/* ✅ 로그인 버튼 */}
      <Button
        variant="primary"
        disabled={
          !(emailValue.length > 0 && passwordValue.length > 0 && !errors.email)
        }
        size="large"
        style={{ width: '100%' }}
      >
        로그인
      </Button>
    </form>
  );
};
