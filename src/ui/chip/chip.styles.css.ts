import { style, styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars, paletteTokens, typographyTokens } from './../theme.css';

const base = style([
  {
    border: '1px solid',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
]);

const color = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  color: globalVars.color[paletteTokenKey],
}));

const backgroundColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  backgroundColor: globalVars.color[paletteTokenKey],
}));

const borderColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  borderColor: globalVars.color[paletteTokenKey],
}));

export const typography = styleVariants(
  typographyTokens,
  (_, typographyTokenKey) => ({
    ...globalVars.typography[typographyTokenKey],
  }),
);

export const chipVariants = recipe({
  base,
  variants: {
    shape: {
      pill: { borderRadius: 20, padding: '6px 10px' },
      rect: { borderRadius: 8, padding: '8px 10px' },
      tag: {
        border: 0,
        padding: '2px 10px',
        borderRadius: 20,
      },
    },
    color,
    borderColor,
    backgroundColor,
    typography,
  },
});

export type ChipVariants = Exclude<
  RecipeVariants<typeof chipVariants>,
  undefined
>;

export const chipHasElement = style({
  cursor: 'pointer',
  paddingRight: 2,
});
