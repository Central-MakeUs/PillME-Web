import { createVar, style } from '@vanilla-extract/css';

export const size = createVar();

export const spacer = style({
  display: 'block',
  height: size,
});
