import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  height: 320,
});

export const title = style([
  typography('head_1_18_sb'),
  { paddingTop: 15, paddingLeft: 20 },
]);

export const contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 60,
  padding: '45px 37px 54px 20px',
});

export const box1 = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: 37,
    color: color('grey800'),
  },
  typography('head_2_16_sb'),
]);

export const flexStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
});

export const box2 = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 45,
});

export const danger = style({
  borderRadius: '50%',
  flexShrink: 0,
  width: '16px',
  height: '16px',
  position: 'relative',
  background: color('redDanger'),
});

export const success = style({
  borderRadius: '50%',
  flexShrink: 0,
  width: '16px',
  height: '16px',
  position: 'relative',
  background: color('greenSuccess'),
});

export const overflow = style({
  borderRadius: '50%',
  flexShrink: 0,
  width: '16px',
  height: '16px',
  position: 'relative',
  background: color('yellowWarning'),
});
