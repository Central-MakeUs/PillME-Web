import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: '5px 0 8px 0',
});

export const headerTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const gallery = style({
  display: 'flex',
  gap: 18,
  overflowX: 'auto',
  width: 'calc(100dvw - 40px)',
  '@media': {
    'screen and (min-width: 440px)': {
      width: 400,
    },
  },
  whiteSpace: 'nowrap',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
