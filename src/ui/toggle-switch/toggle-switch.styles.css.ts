import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css.ts';
import { typography } from '../typography.css.ts';

export const toggleGroupRoot = style([
  typography('body_2_14_sb'),
  {
    all: 'unset',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '184px',
    height: '40px',
    backgroundColor: globalVars.color.grey200,
    borderRadius: '20px',
    cursor: 'pointer',
  },
]);

export const toggleGroupSlider = style({
  position: 'absolute',
  width: '50%',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: globalVars.color.mainblue500,
  transition: 'transform 200ms ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    ':has(> * + [data-state="on"]) &': {
      transform: 'translateX(100%)',
    },
  },
});

export const toggleGroupItem = style({
  all: 'unset',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20px',
  width: '92px',
  borderRadius: '20px',
  transition: 'color 200ms ease',
  userSelect: 'none',
  cursor: 'pointer',
  selectors: {
    '&[data-state="on"]': {
      color: globalVars.color.white,
    },
    '&[data-state="off"]': {
      color: globalVars.color.grey500,
    },
  },
});
