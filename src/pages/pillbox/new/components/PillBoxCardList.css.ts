import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const pillboxCardListContainer = style({
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 35,
  overflow: 'hidden',
});

export const cardContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 12,
  width: '100%',
});

export const image = style({
  height: 105,
  borderRadius: 6,
  aspectRatio: '1',
});

export const cardRight = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
});

export const description = style([
  {
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);

export const title = style([
  {
    color: color('black'),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  typography('head_2_16_sb'),
]);
