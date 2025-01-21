import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { typography } from '../typography.css';
import { globalVars } from './../theme.css';

const base = style([
  typography('head_3_16_r'),
  {
    color: globalVars.color.black,
    outline: 'none',
    borderRadius: 20,
    border: 'none',
    width: '100%',
    '::placeholder': {
      color: globalVars.color.grey500,
    },
  },
]);

export const searchFieldVariants = recipe({
  base,
  variants: {
    variant: {
      default: {
        padding: '8px 32px 8px 40px',
        backgroundColor: globalVars.color.grey200,
      },
      home: {
        padding: '14px 27px 14px 52px',
        backgroundColor: globalVars.color.white,
        border: '1px solid',
        borderColor: globalVars.color.mainblue500,
        borderRadius: 25,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type SearchFieldVariants = Exclude<
  RecipeVariants<typeof searchFieldVariants>,
  undefined
>;

export const searchFieldContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const SearchFieldLeftElement = style({
  position: 'absolute',
  left: 12,
  height: '100%',
});

export const SearchFieldRightElement = style({
  all: 'unset',
  position: 'absolute',
  right: 4,
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
