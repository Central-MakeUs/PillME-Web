import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DeleteCir, ErrorCir } from '../../../assets';
import { Button } from '../../../ui/button';
import * as styles from './styles.css';

const loginSchema = z.object({
  email: z.string().email('이메일을 형식에 맞게 입력해주세요'),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const [password, setPassword] = useState('');

  const onSubmit = (data: FormData) => {
    console.log('로그인 정보:', data);
    alert('로그인 성공!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.inputTextField}>
        <label className={styles.label}>이메일</label>
        <input
          type="email"
          placeholder="이메일 입력"
          className={styles.input}
          {...register('email')}
        />
        {errors.email && (
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && (
            <DeleteCir
              onClick={() => setPassword('')}
              className={styles.clearButton}
            />
          )}
        </div>
      </div>

      <Button
        variant="primary"
        disabled={!isValid}
        size="large"
        style={{ width: '100%' }}
      >
        로그인
      </Button>
    </form>
  );
};
