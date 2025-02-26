import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const boxContainer = style({
  padding: '0 20px 30px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const boxTitle = style([
  { color: color('grey800') },
  typography('title_2_20_b'),
]);

export const myPillBox = style({
  position: 'relative',
  border: `1px dashed ${color('mainblue500')}`,
  background: color('blue100'),
  height: 122,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,

  cursor: 'pointer',
});

export const boxDesc = style([
  { color: color('mainblue500') },
  typography('body_2_14_sb'),
]);

export const boxIcon = style({
  position: 'absolute',
});

export const spaceColor = style({
  background: color('grey100'),
});

export const analyzeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const analyzeHeader = style({
  padding: '20px 12px 0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const notice = style([
  {
    display: 'flex',
    gap: 6,
    color: color('grey500'),
    cursor: 'pointer',
  },
  typography('body_5_12_r'),
]);

export const tabLabel = style({
  display: 'flex',
  justifyContent: 'space-around',
});

export const analyzeTitle = style([
  { color: color('grey500'), padding: '30px 0', textAlign: 'center' },
  typography('body_3_14_r'),
]);

export const ingredientGrid = style({
  margin: '0 20px',
  height: 100,
  background: color('blue100'),
  display: 'flex',
  justifyContent: 'center',
});

export const flexStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  width: 96,
  height: 100,
});

export const statusIndicator = recipe({
  base: {
    borderRadius: '50%',
    flexShrink: 0,
    width: '8px',
    height: '8px',
    position: 'relative',
  },
  variants: {
    status: {
      red: { background: color('redDanger') },
      green: { background: color('greenSuccess') },
      yellow: { background: color('yellowWarning') },
    },
  },
  defaultVariants: {
    status: 'green',
  },
});

export const statusText = recipe({
  base: [{}, typography('body_2_14_sb')],
  variants: {
    status: {
      red: { color: color('redDanger') },
      green: { color: color('greenSuccess') },
      yellow: { color: color('yellowWarning') },
    },
  },
  defaultVariants: {
    status: 'green',
  },
});

export const countText = style([
  { color: color('grey800') },
  typography('head_2_16_sb'),
]);

export const line = style({
  flexShrink: 0,
  height: 53,
  display: 'block',
  border: `1px dashed ${color('grey300')}`,
  margin: '24px 8px',
});
