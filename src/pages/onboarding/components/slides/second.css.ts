import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateY(40px)',
});

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 26.5,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
});

//TODO 타이포 변경 필요
export const title = style([
  typography('title_1_22_b'),
  {
    color: color('blue900'),
  },
]);

export const description = style([
  typography('head_3_16_r'),
  {
    color: color('blue700'),
  },
]);

export const imageContainer = style({
  padding: '28px 12px',
});

export const image = style({
  width: 250,
  height: 292,
});
