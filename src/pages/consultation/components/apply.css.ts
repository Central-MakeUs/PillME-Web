import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  background: color('blue100'),
  height: '100%',
  padding: '32px 20px 0 20px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
});

export const title = style([typography('title_2_20_b')]);

export const btn = style([
  {
    height: 36,
    padding: '6px 20px 6px 20px',
    background: color('white'),
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: color('grey800'),
    borderRadius: 40,
    borderBlock: `1px solid ${color('grey300')}`,
  },
  typography('body_2_14_sb'),
]);

export const cardContianer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
});
