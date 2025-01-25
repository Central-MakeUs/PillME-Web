import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const form = style({
  padding: '19.5px 20px 20px 20.5px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const formBody = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    gap: {
      30: { gap: 30 },
      26: { gap: 26 },
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const title = style([
  typography('title_1_22_b'),
  {
    color: color('grey800'),
  },
]);

export const description = style([
  typography('head_3_16_r'),
  {
    color: color('grey800'),
  },
]);

export const formFieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const button = style({
  margin: '0 auto',
});
