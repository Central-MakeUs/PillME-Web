import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

export const formErrorMessageBase = style([
  typography('body_5_12_r'),
  {
    color: globalVars.color.redDanger,
  },
]);

export const formErrorMessageContainer = style({
  display: 'flex',
  gap: 4,
  padding: '1.5px 0',
  alignItems: 'center',
});
