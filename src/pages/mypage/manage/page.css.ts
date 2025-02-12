import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  padding: '32.5px 20px 24px 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const label = style([
  {
    color: color('grey800'),
  },
  typography('head_3_16_r'),
]);

export const emailContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const value = style([
  {
    color: color('grey600'),
  },
  typography('head_3_16_r'),
]);

export const dialogTriggerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 14,
});

export const dialogTrigger = style([
  {
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);
