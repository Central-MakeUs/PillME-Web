import { style } from '@vanilla-extract/css';
import { color } from '../color.css';
import { typography } from '../typography.css';

export const container = style({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
});

export const image = style({
  height: 160,
  borderRadius: 6,
});

export const company = style([
  typography('body_5_12_r'),
  {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: color('grey500'),
  },
]);

export const productName = style([
  typography('body_3_14_r'),
  {
    display: '-webkit-inline-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    whiteSpace: 'normal',
    overflow: 'hidden',
    color: color('black'),
  },
]);

export const price = style([
  typography('body_3_14_r'),
  { color: color('black') },
]);

export const priceNumber = style([typography('head_2_16_sb')]);
