import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const centerStack = style({
  display: 'flex',
  flexDirection: 'column',
});

export const separator = style({
  height: 2,
  backgroundColor: color('grey100'),
  marginTop: 10,
});

export const productFilterList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: '20px 0 20px 20px',
});

export const filterTitle = style([
  typography('body_2_14_sb'),
  {
    flexShrink: 0,
    padding: '8px 8px 8px 0',
    display: 'flex',
    alignItems: 'center',
    color: color('grey800'),
  },
]);

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
