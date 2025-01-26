import { style } from '@vanilla-extract/css';
import { typography } from '../../ui';
import { globalVars } from '../../ui/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '0 18px',
  marginTop: '20px',
  boxSizing: 'border-box',
  width: '100%',
});

export const title = style([
  {
    color: globalVars.color.grey800,
  },
  typography('title_1_22_b'),
]);

export const buttonText = style({
  display: 'flex',
  gap: '14px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
