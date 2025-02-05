import { style } from '@vanilla-extract/css';
import { color } from '../color.css';
import { typography } from '../typography.css';

export const item = style({
  display: 'flex',
  gap: 12,
  position: 'relative',
});

export const image = style({
  width: 105,
  borderRadius: 6,
  aspectRatio: '1',
});

export const itemContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
});

export const itemHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const iconButton = style({
  width: 24,
  height: 24,
});

export const chipContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const cardDescription = style([
  {
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);

export const cardTitle = style([
  {
    color: color('black'),
  },
  typography('head_2_16_sb'),
]);
