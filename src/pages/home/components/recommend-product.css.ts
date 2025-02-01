import { style } from '@vanilla-extract/css';
import { color, typography } from '../../../ui';

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

export const description = style([
  typography('body_3_14_r'),
  {
    color: color('grey600'),
  },
]);

export const title = style([
  typography('title_2_20_b'),
  {
    color: color('grey800'),
  },
]);

export const maxWidthBox = style({
  width: 140,
});
