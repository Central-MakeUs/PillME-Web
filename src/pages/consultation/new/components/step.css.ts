import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';
import { globalVars } from '@/ui/theme.css';

export const container = style({
  paddingBottom: 20,
});

export const title = style([
  {
    color: color('grey800'),
  },
  typography('title_1_22_b'),
]);

export const box = style({
  display: 'flex',
  gap: 25,
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  marginTop: 30,
});

export const textArea = style([
  typography('head_3_16_r'),
  {
    color: globalVars.color.black,
    backgroundColor: globalVars.color.white,
    outline: 'none',
    borderRadius: 6,
    border: `1px solid ${globalVars.color.grey300}`,
    width: '100%',
    height: 157,
    padding: '13px 16px',
    boxSizing: 'border-box',
    resize: 'none',
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

export const button = style({
  width: '100%',
  marginTop: 20,
});

export const inputCount = style([
  {
    float: 'inline-end',
    color: '#808087',
  },
  typography('body_5_12_r'),
]);
