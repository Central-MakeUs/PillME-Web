import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css.ts';
import { typography } from '../typography.css.ts';

export const formLabelBase = style([
  typography('body_2_14_sb'),
  {
    color: globalVars.color.grey800,
  },
]);
