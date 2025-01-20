import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

export const switchRoot = style([
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
    gap: '4px',
  },
]);

export const switchSlider = recipe({
  base: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    borderRadius: '20px',
    backgroundColor: globalVars.color.mainblue500,
    transition: 'transform 200ms ease',
  },
  variants: {
    checked: {
      false: {
        transform: 'translateX(0)',
      },
      true: {
        transform: 'translateX(calc(100%))',
      },
    },
  },
});

export const switchThumb = recipe({
  base: {
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
  },
  variants: {
    checked: {
      true: {
        color: globalVars.color.white,
      },
      false: {
        color: globalVars.color.grey500,
      },
    },
  },
});
