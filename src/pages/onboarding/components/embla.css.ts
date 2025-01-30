import { style } from '@vanilla-extract/css';
import { color } from '@/ui';

export const embla = style({
  maxWidth: '100%',
});

export const emblaViewport = style({
  overflow: 'hidden',
});

export const emblaContainer = style({
  display: 'flex',
  touchAction: 'pan-y pinch-zoom',
  marginLeft: 'calc(1rem * -1)',
});

export const emblaSlide = style({
  transform: 'translate3d(0, 0, 0)',
  flex: '0 0 100%',
  minWidth: 0,
  paddingLeft: '1rem',
  position: 'relative',
  overflow: 'hidden',
});

export const emblaSlideNumber = style({
  boxShadow: 'inset 0 0 0 0.2rem rgb(25, 25, 25)',
  borderRadius: '1.8rem',
  fontSize: '4rem',
  fontWeight: 600,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100dvh - 264px)',
  userSelect: 'none',
});

export const emblaDots = style({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  justifyContent: 'center',
  alignItems: 'center',
});

export const emblaDot = style({
  WebkitTapHighlightColor: 'rgba(230, 230, 230, 0.5)',
  WebkitAppearance: 'none',
  appearance: 'none',
  touchAction: 'manipulation',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 0,
  padding: 0,
  margin: 0,
  width: 8,
  height: 8,
  backgroundColor: color('grey300'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
});

export const emblaDotSelected = style({
  backgroundColor: color('blue300'),
  width: 28,
  borderRadius: 10,
});

export const backgroundImage = style({
  position: 'absolute',
  top: -10,
  left: 20,
  width: '100%',
  height: '60%',
});
