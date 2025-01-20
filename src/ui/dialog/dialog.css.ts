import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const dialog = style({
  backgroundColor: globalVars.color.white,
  borderRadius: '6px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '303px',
  maxWidth: '324px',
  textAlign: 'center',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1100,
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'flex-start',
  flexShrink: '0',
});

export const title = style([
  { color: globalVars.color.grey800, margin: '0px' },
  typography('head_1_18_sb'),
]);

export const description = style([
  {
    color: globalVars.color.grey500,
    textAlign: 'left',
    maxHeight: '264px',
    margin: '0px',
  },
  typography('body_3_14_r'),
]);

export const buttonContainer = recipe({
  base: {
    display: 'flex',
    height: '44px',
    gap: '8px',
  },
  variants: {
    type: {
      default: { justifyContent: 'space-between' },
      danger: { justifyContent: 'space-between' },
      single: { justifyContent: 'center', width: '100%' },
    },
  },
});

export const button = recipe({
  base: {
    padding: '14px 30px',
    borderRadius: '40px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '127px',
    height: '44px',
    fontWeight: 'bold',
  },
  variants: {
    type: {
      defaultLeft: {
        backgroundColor: globalVars.color.white,
        color: globalVars.color.grey800,
        border: `1px solid ${globalVars.color.grey300}`,
      },
      defaultRight: {
        backgroundColor: globalVars.color.grey800,
        color: globalVars.color.white,
        border: `1px solid ${globalVars.color.grey800}`,
      },
      dangerLeft: {
        backgroundColor: globalVars.color.white,
        color: globalVars.color.grey800,
        border: `1px solid ${globalVars.color.grey300}`,
      },
      dangerRight: {
        backgroundColor: globalVars.color.redDanger,
        color: globalVars.color.white,
        border: `1px solid ${globalVars.color.redDanger}`,
      },
      single: {
        backgroundColor: globalVars.color.grey800,
        color: globalVars.color.white,
        border: `1px solid ${globalVars.color.grey800}`,
        width: '100%',
      },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
export type ButtonContainerVariants = RecipeVariants<typeof buttonContainer>;
