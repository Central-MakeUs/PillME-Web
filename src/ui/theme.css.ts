import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

// tokens
export const typographyTokens = {
  title_1_22_b: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  title_2_20_b: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  head_1_18_sb: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  head_2_16_sb: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  head_3_16_r: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  body_1_16_r: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  body_2_14_sb: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  body_3_14_r: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  body_4_12_b: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  body_5_12_r: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  caption_1_10_sb: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
  caption_2_10_r: {
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  },
};

export const bluePaletteTokens = {
  blue100: 'blue_blue100',
  blue200: 'blue_blue200',
  blue300: 'blue_blue300',
  blue400: 'blue_blue400',
  mainblue500: 'blue_mainblue500',
  blue600: 'blue_blue600',
  blue700: 'blue_blue700',
  blue800: 'blue_blue800',
  blue900: 'blue_blue900',
};

export const greyPaletteTokens = {
  grey100: 'grey_grey100',
  grey200: 'grey_grey200',
  grey300: 'grey_grey300',
  grey400: 'grey_grey400',
  grey500: 'grey_grey500',
  grey600: 'grey_grey600',
  grey700: 'grey_grey700',
  grey800: 'grey_grey800',
  grey900: 'grey_grey900',
};

export const semanticPaletteTokens = {
  greenSuccess: 'green_success',
  yellowWarning: 'yellow_waring',
  redDanger: 'red_danger',
  blueInfo: 'blue_info',
  enough: 'enough',
  shortage: 'shortage',
  excess: 'excess',
};

export const inherencePaletteTokens = {
  black: 'black',
  white: 'white',
};

export const paletteTokens = {
  ...bluePaletteTokens,
  ...greyPaletteTokens,
  ...semanticPaletteTokens,
  ...inherencePaletteTokens,
};

export const themeTokens = {
  typography: typographyTokens,
  color: paletteTokens,
};

export const globalVars = createGlobalThemeContract(
  themeTokens,
  (value, path) => `${path.join('-')}-${value}`,
);

// 폰트
export const typography = {
  title_1_22_b: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: '22px',
    lineHeight: '136%',
    letterSpacing: '-0.3%',
  },
  title_2_20_b: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '136%',
    letterSpacing: '-0.3%',
  },
  head_1_18_sb: {
    fontFamily: 'Pretendard',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  head_2_16_sb: {
    fontFamily: 'Pretendard',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  head_3_16_r: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  body_1_16_r: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '170%',
    letterSpacing: '-0.3%',
  },
  body_2_14_sb: {
    fontFamily: 'Pretendard',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  body_3_14_r: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  body_4_12_b: {
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  body_5_12_r: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  caption_1_10_sb: {
    fontFamily: 'Pretendard',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
  caption_2_10_r: {
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '140%',
    letterSpacing: '-0.3%',
  },
};

export const bluePalette: typeof bluePaletteTokens = {
  blue100: '#f4f8ff',
  blue200: '#d6e4ff',
  blue300: '#85a9ff',
  blue400: '#6690ff',
  mainblue500: '#3366ff',
  blue600: '#254edb',
  blue700: '#1939b7',
  blue800: '#102693',
  blue900: '#091a7a',
};

export const greyPalette: typeof greyPaletteTokens = {
  grey100: '#eff3f6',
  grey200: '#e0eaf2',
  grey300: '#c0ceda',
  grey400: '#9ba7b5',
  grey500: '#6b7684',
  grey600: '#4e5c71',
  grey700: '#35445f',
  grey800: '#273044',
  grey900: '#202431',
};

export const semanticPalette: typeof semanticPaletteTokens = {
  greenSuccess: '#3acc95',
  yellowWarning: '#ffcd3a',
  redDanger: '#ff4c4c',
  blueInfo: '#5494fc',
  enough: '#00945C',
  shortage: '#D40000',
  excess: '#F2A41C',
};

export const inherencePalette: typeof inherencePaletteTokens = {
  black: '#000000',
  white: '#ffffff',
};

export const color = {
  ...bluePalette,
  ...greyPalette,
  ...semanticPalette,
  ...inherencePalette,
};

createGlobalTheme(':root', globalVars, { typography, color });
