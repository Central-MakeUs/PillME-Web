import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

export const buttonText = style([
  {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    flexShrink: '0',
    alignItems: 'center',
    color: globalVars.color.grey600,
    cursor: 'pointer',
  },
  typography('body_3_14_r'),
]);

export const icon = style({
  width: '24px',
  height: '24px',
  fill: 'currentColorer',
  margin: '0 0 0 -8px',
});
