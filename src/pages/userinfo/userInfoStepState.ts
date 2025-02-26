import { createFunnelSteps } from '@use-funnel/browser';

export type UserInfoOptionalState = {
  name?: string;
  birth?: string;
  gender?: 'M' | 'F' | 'NONE';
};

export const userInfoSteps = createFunnelSteps<UserInfoOptionalState>()
  .extends('NameStep', {
    requiredKeys: [],
  })
  .extends('BirthStep', {
    requiredKeys: ['name'],
  })
  .extends('GenderStep', {
    requiredKeys: ['name', 'birth'],
  })
  .build();
