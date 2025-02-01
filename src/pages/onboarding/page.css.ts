import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const onboarding = style({
  background:
    'radial-gradient(closest-side,rgba(255, 255, 255, 1) 0%,rgba(226, 233, 255, 1) 100%)',
  display: 'flex',
  flexDirection: 'column',
});

export const linkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingTop: 48,
  paddingBottom: 10,
});

export const text = style([
  typography('body_3_14_r'),
  {
    color: color('grey600'),
  },
]);
