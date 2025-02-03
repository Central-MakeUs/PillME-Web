import { style } from '@vanilla-extract/css';
import { color } from '../color.css';
import { typography } from '../typography.css';

export const label = style([
  typography('body_2_14_sb'),
  {
    flexShrink: 0,
    padding: '8px 8px 8px 0',
    display: 'flex',
    alignItems: 'center',
    color: color('grey800'),
  },
]);
