import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  height: 2,
  backgroundColor: color('grey100'),
  marginTop: 10,
});

export const productFilterContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 20,
});

export const subBanner = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: color('black'),
    padding: '0 20px',
  },
  typography('body_3_14_r'),
]);

export const userFilterContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const gallery = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '35px 15px',
  padding: '20px',
});
