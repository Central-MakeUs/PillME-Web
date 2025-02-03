import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
});

export const listContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  overflowX: 'scroll',
  paddingRight: 20,
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
