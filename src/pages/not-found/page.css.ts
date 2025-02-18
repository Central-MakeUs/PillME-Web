import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const message = style([
  {
    color: color('grey600'),
  },
  typography('head_2_16_sb'),
]);

export const image = style({
  width: 182,
  aspectRatio: 1,
});
