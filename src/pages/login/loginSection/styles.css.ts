import { style } from '@vanilla-extract/css';
import { typography } from '../../../ui';
import { globalVars } from '../../../ui/theme.css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
});

export const inputTextField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  alignItems: 'flex-start',
  width: '100%',
  boxSizing: 'border-box',
  position: 'relative',
});

export const label = style([
  {
    color: globalVars.color.grey800,
  },
  typography('body_2_14_sb'),
]);

export const input = style([
  {
    borderRadius: '6px',
    border: '1px solid',
    borderColor: globalVars.color.grey300,
    padding: '0 16px',
    height: '48px',
    overflow: 'hidden',
    color: globalVars.color.black,
    width: '100%',
    boxSizing: 'border-box',
  },
  typography('head_3_16_r'),
  {
    selectors: {
      '&::placeholder': {
        color: globalVars.color.grey400,
      },
    },
  },
]);

export const clearButton = style({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  fontSize: '16px',
  color: globalVars.color.grey500,
  transition: 'color 0.2s ease-in-out',
  ':hover': {
    color: globalVars.color.grey700,
  },
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: 'red',
});

export const passwordWrapper = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});
