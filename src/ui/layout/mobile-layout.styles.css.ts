import { style } from '@vanilla-extract/css';
import { color } from '../color.css';

export const mobileLayoutWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100dvh',
  backgroundColor: color('grey200'),
});

export const mobileLayoutInner = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 440,
  height: '100dvh',
  backgroundColor: color('white'),
});
