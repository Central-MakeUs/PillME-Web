import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const Container = style({
  paddingTop: 30,
  padding: '30px 19.5px 0 19.5px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const Content = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style([
  {
    color: color('grey800'),
    flex: 1,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  typography('head_2_16_sb'),
]);
export const caption = style([
  { color: color('grey700'), flex: 1, textAlign: 'right' },
  typography('caption_2_10_r'),
]);

export const group = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  width: '138px',
  height: '16px',
  position: 'relative',
  flex: 1,
  justifyContent: 'center',
});

export const rectangleBar = style({
  background: color('grey100'),
  borderRadius: '11px',
  width: '138px',
  height: '16px',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

export const rectangleBlue = style({
  background: color('blue200'),
  borderRadius: '11px',
  height: '16px',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

export const ellipse = recipe({
  base: {
    borderRadius: '50%',
    width: '15px',
    height: '15.23px',
    position: 'absolute',
    top: '0.36px',
  },
  variants: {
    status: {
      DEFICIENT: { background: color('redDanger') }, // 부족: 🔴
      ADEQUATE: { background: color('greenSuccess') }, // 충족: 🟢
      EXCESS: { background: color('yellowWarning') }, // 과다: 🟡
    },
  },
  defaultVariants: {
    status: 'ADEQUATE', // 기본값: 충족 (초록)
  },
});
