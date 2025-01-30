import { style } from '@vanilla-extract/css';
import { color } from '@/ui';

export const searchContainer = style({
  padding: '0 20px',
});

export const mainContainer = style({
  marginTop: '10px',
  paddingTop: '20px',
  borderTop: '1px solid',
  borderTopColor: color('grey100'),
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});
