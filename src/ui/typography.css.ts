import { style } from '@vanilla-extract/css';
import { globalVars } from './theme.css.ts';

// ex:
// style.css.ts
// export const title = typography('title_1_22_b');

type Variants = {
  title: ['1_22_b', '2_20_b'];
  head: ['1_18_sb', '2_16_sb', '3_16_r'];
  body: ['1_16_r', '2_14_sb', '3_14_r', '4_12_b', '5_12_r'];
  caption: ['1_10_sb', '2_10_r'];
};

type Variant = {
  [K in keyof Variants]: `${K}_${Variants[K][number]}`;
}[keyof Variants];

export const typography = (key: Variant) => {
  const typographyVars = globalVars.typography[key];

  if (!typographyVars) {
    throw new Error(`Invalid typography key: ${key}`);
  }

  return style({
    fontFamily: `${typographyVars.fontFamily}`,
    fontWeight: `${typographyVars.fontWeight}`,
    fontSize: `${typographyVars.fontSize}`,
    lineHeight: `${typographyVars.lineHeight}`,
    letterSpacing: `${typographyVars.letterSpacing}`,
  });
};
