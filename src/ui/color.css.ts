import { globalVars } from './theme.css';

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
  if (!(token in globalVars.color)) {
    throw new Error(`Invalid color token: ${token}`);
  }

  return globalVars.color[token];
};
