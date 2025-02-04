import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  marginTop: 10,
});

export const productContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
  marginBottom: 20,
});
export const productImg = style({
  width: '100%',
  height: 350,
});
export const info = style({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});
export const subTitle = style([
  {
    color: color('grey600'),
  },
  typography('head_3_16_r'),
]);
export const title = style([
  {
    color: color('grey800'),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  typography('head_1_18_sb'),
]);

export const price = style([
  {
    color: color('grey800'),
  },
  typography('title_2_20_b'),
]);
export const won = style([
  {
    color: color('grey800'),
  },
  typography('head_1_18_sb'),
]);
export const tags = style([
  {
    display: 'flex',
    gap: 4,
  },
]);
export const pillButtonBox = style({
  padding: '0 20px',
});

export const pillButton = style({
  width: '100%',
});

export const spaceColor = style({
  background: color('grey100'),
});

export const chartContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  width: '100%',
  padding: '30px 20px 20px 20px',
});

export const chartHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const sectionTitle = style([
  {
    color: color('grey800'),
  },
  typography('title_2_20_b'),
]);

export const chartBox = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
export const compareContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: '30px 35px 20px 20px',
  borderBottom: '1px solid',
  borderBottomColor: color('grey100'),
});

export const ingredientCards = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const buttonWrapper = style({
  position: 'sticky',
  bottom: 0,
  width: '100%',
  maxWidth: 440,
  display: 'flex',
  gap: 15,
  padding: '14px 34px 20px',
  background: color('white'),
  zIndex: 1000,
});
