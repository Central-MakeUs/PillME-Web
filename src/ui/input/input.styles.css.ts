import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { typography } from '../typography.css';
import { globalVars } from './../theme.css';
import { inputElement } from './input-element.styles.css';

export const inputWithElement = style({
  selectors: {
    [`&:has(~ ${inputElement.classNames.variants.direction.right})`]: {
      paddingRight: 44,
    },
  },
});

const base = style([
  typography('head_3_16_r'),
  {
    color: globalVars.color.black,
    backgroundColor: globalVars.color.white,
    outline: 'none',
    borderRadius: 6,
    border: `1px solid ${globalVars.color.grey300}`,
    width: '100%',
    padding: '13px 16px',
    boxSizing: 'border-box',
    '::placeholder': {
      color: globalVars.color.grey400,
    },
    ':focus': {
      borderColor: globalVars.color.mainblue500,
    },
    ':disabled': {
      backgroundColor: globalVars.color.grey100,
      color: globalVars.color.grey300,
    },
  },
]);

export const inputVariants = recipe({
  base,
  variants: {
    variant: {
      default: {},
      error: {
        borderColor: globalVars.color.redDanger,
        ':focus': {
          borderColor: globalVars.color.redDanger,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type InputVariants = Exclude<
  RecipeVariants<typeof inputVariants>,
  undefined
>;
