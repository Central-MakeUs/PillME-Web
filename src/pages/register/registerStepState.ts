import { createFunnelSteps } from '@use-funnel/browser';

export type registerOptionalState = {
  email?: string;
  code?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  birth?: string;
  gender?: 'MALE' | 'FEMALE' | 'NONE';
};

export const registerSteps = createFunnelSteps<registerOptionalState>()
  .extends('EnterStep', { requiredKeys: [] })
  .extends('VerificationStep', {
    requiredKeys: ['email'],
  })
  .extends('PasswordStep', {
    requiredKeys: ['email', 'code'],
  })
  .extends('NameStep', {
    requiredKeys: ['email', 'code', 'password'],
  })
  .extends('BirthStep', {
    requiredKeys: ['email', 'code', 'password', 'name'],
  })
  .extends('GenderStep', {
    requiredKeys: ['email', 'code', 'password', 'name', 'birth'],
  })
  .build();
