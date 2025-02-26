import { style } from '@vanilla-extract/css';
import { color } from '@/ui';

export const stack = style({
  display: 'flex',
  flexDirection: 'column',
});

export const searchFieldContainer = style({
  padding: '18px 20px 10px 20px',
  borderBottom: `2px solid ${color('grey100')}`,
});
