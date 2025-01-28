import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
});

export const contentContainer = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: 440,
  width: '100%',
});

export const content = style({
  width: '100%',
  padding: '15px 20px',
  borderRadius: '10px 10px 0 0',
  backgroundColor: globalVars.color.white,
  outline: 'none',
  ':focus': {
    outline: 'none',
  },
});

export const handle = style({
  backgroundColor: globalVars.color.grey300,
  width: 40,
  height: 4,
  borderRadius: 5,
});
