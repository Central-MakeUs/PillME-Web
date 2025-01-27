import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const form = style({
  padding: '19.5px 20px 20px 20.5px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const formBody = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    gap: {
      30: { gap: 30 },
      26: { gap: 26 },
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const title = style([
  typography('title_1_22_b'),
  {
    color: color('grey800'),
  },
]);

export const description = style([
  typography('head_3_16_r'),
  {
    color: color('grey800'),
  },
]);

export const formFieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const button = style({
  margin: '0 auto',
});

export const dropdownTrigger = style({
  position: 'relative',
  borderRadius: 6,
  border: `1px solid ${color('mainblue500')}`,
  width: '100%',
  padding: '13px 16px',
  selectors: {
    '&[data-state="open"]': {
      marginBottom: 100,
    },
  },
  transition: 'all 0.3s',
  cursor: 'pointer',
});

export const dropdownTriggerIcon = style({
  top: 0,
  right: 12,
  position: 'absolute',
  width: 24,
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const dropdownMenuContent = style({
  width: 'calc(100dvw - 40px)',
  '@media': {
    'screen and (min-width: 440px)': {
      width: 400,
    },
  },
  backgroundColor: color('white'),
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0px 0px 32px 0px rgba(0, 0, 0, 0.2)',
});

export const dropdownMenuItem = style({
  position: 'relative',
  padding: '12px 16px 12px 32px',
  color: color('black'),
  cursor: 'pointer',
});

export const dropdownMenuItemIndicator = style({
  top: 0,
  left: 7,
  position: 'absolute',
  width: 24,
  height: 44,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
