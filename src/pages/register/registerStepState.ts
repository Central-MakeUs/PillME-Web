import { createFunnelSteps } from '@use-funnel/browser';

export type registerOptionalState = {
  email?: string;
  code?: string;
  password?: string;
  confirmPassword?: string;
};

export const registerSteps = createFunnelSteps<registerOptionalState>()
  .extends('EnterStep', { requiredKeys: [] })
  .extends('VerificationStep', {
    requiredKeys: ['email'],
  })
  .extends('PasswordStep', {
    requiredKeys: ['email', 'code'],
  })
  .build();
