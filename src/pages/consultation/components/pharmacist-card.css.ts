import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  position: 'relative',
  display: 'flex',
  gap: 7,
  background: color('white'),
  borderRadius: 8,
  padding: '13px 11px 13px 11px',
});
export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  width: 260,
});
export const name = style([
  {
    color: color('grey800'),
  },
  typography('head_2_16_sb'),
]);
export const tags = style([
  {
    display: 'flex',
    gap: 5,
    color: color('grey600'),
  },
  typography('body_5_12_r'),
]);
export const importantTag = style({
  color: color('mainblue500'),
});
export const btn = style({
  alignSelf: 'flex-end',
  marginTop: 14,
});
