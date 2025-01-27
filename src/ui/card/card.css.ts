import { style } from '@vanilla-extract/css';

export const container = style({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: 140,
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
  width: 140,
  height: 160,
});

export const company = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const productName = style({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  wordWrap: 'break-word',
  wordBreak: 'keep-all',
  overflow: 'hidden',
  lineHeight: '1.2',
});
