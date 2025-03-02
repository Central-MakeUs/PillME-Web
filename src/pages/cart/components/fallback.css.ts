import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const center = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

export const centerStack = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style([
  {
    color: color('grey600'),
  },
  typography('head_2_16_sb'),
]);
