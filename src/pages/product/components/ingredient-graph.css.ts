import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const Container = style({
  paddingTop: 30,
  padding: '30px 19.5px 0 19.5px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const Content = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const title = style([
  { color: color('grey800') },
  typography('head_2_16_sb'),
]);
export const caption = style([
  { color: color('grey700') },
  typography('caption_2_10_r'),
]);

export const group = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  width: '138px',
  height: '16px',
  position: 'relative',
});

export const rectangleBar = style({
  background: color('grey100'),
  borderRadius: '11px',
  width: '138px',
  height: '16px',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

export const rectangleBlue = style({
  background: color('blue200'),
  borderRadius: '11px',
  width: '69px', // 바뀌는 부분
  height: '16px',
  position: 'absolute',
  left: '50%', // 바뀌는 부분
  transform: 'translateX(-50%)',
  top: '0px',
});

export const ellipse = style({
  background: color('greenSuccess'),
  borderRadius: '50%',
  width: '15px',
  height: '15.23px',
  position: 'absolute',
  left: '45.5px', // 바뀌어야 하는 부분
  top: '0.36px',
});
