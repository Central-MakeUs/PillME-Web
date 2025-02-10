import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const appBar = style({
  backgroundColor: color('blue100'),
});

export const header = style({
  backgroundColor: color('blue100'),
  padding: '32px 20px 30px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const name = style([
  {
    color: color('grey900'),
  },
  typography('head_1_18_sb'),
]);

export const emailContainer = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
});

export const email = style([
  {
    color: color('grey600'),
  },
  typography('head_3_16_r'),
]);

export const separator = style({
  height: 10,
  backgroundColor: color('grey100'),
});

export const listContainer = style({
  padding: '30px 20px',
});

export const listTitle = style([
  {
    color: color('blue600'),
  },
  typography('head_2_16_sb'),
]);

export const listItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const itemText = style([
  {
    color: color('grey800'),
  },
  typography('head_3_16_r'),
]);
