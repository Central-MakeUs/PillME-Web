import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const keywordListContainer = style({
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const keyword = style([
  {
    color: color('grey800'),
  },
  typography('head_3_16_r'),
]);

export const highlightKeyword = style([
  {
    color: color('mainblue500'),
  },
  typography('head_3_16_r'),
]);
