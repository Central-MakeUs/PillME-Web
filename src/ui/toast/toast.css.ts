import { style } from '@vanilla-extract/css';
import { color } from '../color.css';
import { typography } from '../typography.css';

export const toastContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 335,
  height: 48,
  background: color('grey800'),
  borderRadius: 30,
  padding: '14px 16px',
  gap: 8,
});

export const message = style([
  {
    color: color('white'),
    width: '70%',
  },
  typography('body_2_14_sb'),
]);

export const btnMessage = style([
  {
    color: color('blue400'),
    cursor: 'pointer',
  },
  typography('body_2_14_sb'),
]);
