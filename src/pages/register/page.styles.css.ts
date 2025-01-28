import { style } from '@vanilla-extract/css';
import { typography } from '../../ui';
import { globalVars } from '../../ui/theme.css';

export const form = style({
  padding: '19.5px 20px 20px 20.5px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxSizing: 'border-box',
  width: '100%',
});

export const title = style([
  {
    color: globalVars.color.grey800,
  },
  typography('title_1_22_b'),
]);

export const subTitle = style([
  {
    marginTop: '3px',
  },
  typography('head_3_16_r'),
]);

export const FullWidth = style({
  width: '100%',
});

export const errorMessage = style([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: globalVars.color.redDanger,
  },
  typography('body_5_12_r'),
]);

export const buttonText = style({
  color: globalVars.color.blueInfo,
  marginTop: '20px',
});
