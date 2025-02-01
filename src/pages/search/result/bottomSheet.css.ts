import { style, styleVariants } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
});

export const title = style([typography('head_1_18_sb'), { paddingTop: 15 }]);

export const contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const option = style([
  {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  typography('head_2_16_sb'),
]);

export const optionVariants = styleVariants({
  default: {
    color: color('black'),
  },
  selected: {
    color: color('mainblue500'),
  },
});
