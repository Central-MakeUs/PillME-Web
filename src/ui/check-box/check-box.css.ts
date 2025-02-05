import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { globalVars, paletteTokens } from '@/ui/theme.css';

const backgroundColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  backgroundColor: globalVars.color[paletteTokenKey],
}));

const borderColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  borderColor: globalVars.color[paletteTokenKey],
}));

export const checkboxItemLeft = style({
  display: 'flex',
  gap: 6,
  alignItems: 'center',
});

export const checkboxIndicator = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
  },
  variants: {
    backgroundColor,
    borderColor,
  },
});
