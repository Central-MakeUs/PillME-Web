import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  height: 2,
  backgroundColor: color('grey100'),
  marginTop: 10,
});

export const container = style({
  padding: '18px 20px',
  paddingBottom: 102,
});

export const pageSubTitle = style([
  {
    color: color('grey800'),
  },
  typography('title_2_20_b'),
]);

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 0 8px 0',
});

export const listHeaderLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const deleteAllLabel = style([
  {
    color: color('grey900'),
  },
  typography('body_2_14_sb'),
]);

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 35,
});

export const checkbox = style({
  position: 'absolute',
  top: 3,
  left: 3,
});

export const price = style([
  typography('head_3_16_r'),
  { color: color('black') },
]);

export const priceNumber = style([typography('head_1_18_sb')]);

export const buttonContainer = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 440px)': {
      width: 440,
    },
  },
  backgroundColor: color('white'),
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 20px',
});
