import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const pageLayoutContainer = style({
  height: calc.subtract('100dvh', '84px'),
  overflow: 'auto',
});

export const pageLayoutContent = style({
  minHeight: '100%',
});
