import { style } from '@vanilla-extract/css';
import { color, typography } from '../../../ui';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'center',
});

export const description = style([
  typography('body_5_12_r'),
  {
    color: color('black'),
  },
]);
