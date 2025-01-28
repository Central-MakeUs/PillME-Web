import { z } from 'zod';

export const email = z.string().email('유효한 이메일을 입력해주세요.');
export type Email = z.infer<typeof email>;

export const code = z
  .string()
  .length(6, '6자리 인증 코드를 입력해주세요')
  .regex(/^\d+$/, '정확한 인증코드를 입력해주세요.');
export type Code = z.infer<typeof code>;

export const password = z
  .string()
  .min(1, { message: '비밀번호를 입력해주세요.' })
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?/`~-])/,
    '비밀번호는 영문, 숫자, 특수문자를 조합하여 입력해주세요.',
  );
export type Password = z.infer<typeof password>;

export const confirmPassword = z.string();
export type ConfirmPassword = z.infer<typeof confirmPassword>;
