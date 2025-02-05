import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { typography } from '@/ui';
import { globalVars, paletteTokens } from '@/ui/theme.css';

const color = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  backgroundColor: globalVars.color[paletteTokenKey],
}));

const borderColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  borderColor: globalVars.color[paletteTokenKey],
}));

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const closeButton = style({
  height: 44,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const checkboxList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const checkboxItem = style({
  display: 'flex',
  padding: '15px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
});

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
    color,
    borderColor,
  },
});

export const checkboxLabel = recipe({
  base: {
    color: globalVars.color.grey800,
  },
  variants: {
    type: {
      normal: [typography('body_3_14_r')],
      all: [typography('head_2_16_sb')],
    },
  },
  defaultVariants: {
    type: 'normal',
  },
});

export const separator = style({
  height: 1,
  backgroundColor: globalVars.color.grey300,
});
