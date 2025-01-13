import { style } from '@vanilla-extract/css';
import { globalVars } from './theme.css.ts';

// ex:
// style.css.ts
// export const mainblue500 = backgroundColor('mainblue500');

type ColorCategories = {
  blue: [
    'blue100',
    'blue200',
    'blue300',
    'blue400',
    'mainblue500',
    'blue600',
    'blue700',
    'blue800',
    'blue900',
  ];
  grey: [
    'grey100',
    'grey200',
    'grey300',
    'grey400',
    'grey500',
    'grey600',
    'grey700',
    'grey800',
    'grey900',
  ];
  semantic: [
    'greenSuccess',
    'yellowWarning',
    'redDanger',
    'blueInfo',
    'enough',
    'shortage',
    'excess',
  ];
  inherence: ['black', 'white'];
};

type ColorToken = ColorCategories[keyof ColorCategories][number];

export const color = (token: ColorToken) => {
  const colorVar = globalVars.color[token];
  if (!colorVar) {
    throw new Error(`Invalid color token: ${token}`);
  }

  return style({
    color: `${colorVar}`,
  });
};

export const backgroundColor = (token: ColorToken) => {
  const colorVar = globalVars.color[token];

  if (!colorVar) {
    throw new Error(`Invalid color token: ${token}`);
  }

  return style({
    backgroundColor: `${colorVar}`,
  });
};