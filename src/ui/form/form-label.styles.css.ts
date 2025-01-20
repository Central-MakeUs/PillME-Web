import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

export const formLabelBase = style([
  typography('body_2_14_sb'),
  {
    color: globalVars.color.grey800,
    display: 'flex',
    gap: 4,
  },
]);

export const requiredIcon = style({
  color: globalVars.color.mainblue500,
});
