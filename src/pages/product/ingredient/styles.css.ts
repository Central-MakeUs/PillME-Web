import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  marginTop: 10,
});

export const pillContainer = style({
  padding: '20px 39px 20px 20px',
  borderTop: '1px solid',
  borderTopColor: color('grey100'),
  display: 'flex',
  alignItems: 'center',
  gap: 11,
});

export const productImg = style({
  width: 105,
  height: 105,
});

export const productDesc = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

export const productTexts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const text1 = style([
  {
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);
export const text2 = style([
  {
    color: color('black'),
    width: 100,
  },
  typography('head_2_16_sb'),
]);

export const chipBox = style({
  display: 'flex',
  gap: 4,
});

export const spaceColor = style({
  background: color('grey100'),
});

export const tabLabel = style({
  paddingTop: 30,
  display: 'flex',
  justifyContent: 'space-around',
});

export const notice = style([
  {
    display: 'flex',
    gap: 6,
    color: color('grey500'),
    marginTop: 30,
    paddingLeft: '19.5px',
    cursor: 'pointer',
  },
  typography('body_5_12_r'),
]);
