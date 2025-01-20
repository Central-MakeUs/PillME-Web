import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme.css.ts';
import { typography } from './../typography.css.ts';

export const bottomNav = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: 440,
  height: '84px',
  display: 'flex',
  justifyContent: 'center',
  gap: '47px',
  padding: '8px 0px 0px 0px',
  backgroundColor: globalVars.color.white,
  border: `0.5px solid ${globalVars.color.grey200}`,
});

export const menuItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  width: '50px',
  height: '50px',
  gap: '2px',
  backgroundColor: globalVars.color.white,
  border: 'none',
});

export const active = style({
  color: globalVars.color.mainblue500,
});

export const icon = style({
  width: '24px',
  height: '24px',
});

export const label = style([
  typography('caption_2_10_r'),
  { textAlign: 'center', whiteSpace: 'nowrap' },
]);
