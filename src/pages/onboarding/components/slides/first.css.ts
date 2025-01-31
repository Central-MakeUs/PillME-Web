import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateY(40px)',
});

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style([
  typography('title_2_20_b'),
  {
    color: color('blue700'),
  },
]);

export const description = style([
  typography('body_3_14_r'),
  {
    color: color('blue300'),
  },
]);
