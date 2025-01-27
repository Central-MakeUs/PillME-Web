import { z } from 'zod';

export const name = z
  .string()
  .min(1, '이름을 입력해주세요.')
  .regex(
    /^[가-힣a-zA-Z0-9]{1,10}$/,
    '띄어쓰기 없이 한글, 영문, 숫자 최대 10글자만 가능해요.',
  );

export type Name = z.infer<typeof name>;

export const birth = z.string();

export type Birth = z.infer<typeof birth>;

export const gender = z.enum(['MALE', 'FEMALE', 'NONE']);

export type Gender = z.infer<typeof gender>;
