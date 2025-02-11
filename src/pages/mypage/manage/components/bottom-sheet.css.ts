import { style } from '@vanilla-extract/css';

export const container = style({
  height: 'calc(100dvh - 120px)',
});

export const buttonContainer = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 440px)': {
      width: 440,
    },
  },
  position: 'fixed',
  left: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 20px',
});

export const button = style({});
