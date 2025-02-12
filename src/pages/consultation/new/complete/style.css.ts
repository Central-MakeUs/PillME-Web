import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  background: color('blue100'),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 65,
});

export const header = style({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '0 20px',
});

export const title = style([
  {
    marginTop: 84,
    color: color('grey800'),
  },
  typography('title_1_22_b'),
]);

export const subTitle = style([
  {
    color: color('grey800'),
  },
  typography('head_3_16_r'),
]);

export const bold = style([typography('head_2_16_sb')]);

export const mid = style({
  marginBottom: 100,
});
