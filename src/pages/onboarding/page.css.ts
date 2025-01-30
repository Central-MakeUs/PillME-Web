import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const onboarding = style({
  background:
    'radial-gradient(closest-side,rgba(255, 255, 255, 1) 0%,rgba(226, 233, 255, 1) 100%)',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
});

export const linkContainer = style({
  paddingBottom: 77,
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  alignItems: 'center',
});

export const spacer = style({
  flexGrow: 1,
});

export const button = style({
  margin: '0 auto',
});

export const text = style([
  typography('body_3_14_r'),
  {
    color: color('grey300'),
  },
]);
