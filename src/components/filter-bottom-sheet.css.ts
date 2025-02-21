import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  height: 'calc(100dvh - 100px)',
  padding: '15px 0',
});

export const fixedBottom = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 440px)': {
      width: 440,
    },
  },
  backgroundColor: color('white'),
  borderTop: `1px solid ${color('grey100')}`,
  position: 'fixed',
  left: 0,
  bottom: 0,
  padding: '14px 20px',
});

export const selectedTagContainer = style({
  gap: 16,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const selectedTag = style({
  color: color('mainblue500'),
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 20px',
  gap: 16,
});

export const bottomSheetTitle = style([
  typography('head_1_18_sb'),
  {
    color: color('grey800'),
    padding: '5px 20px',
  },
]);

export const button = style({
  width: 110,
  flexShrink: 0,
});

export const TabContent = style({
  flexGrow: 1,
  height: 'calc(100dvh - 210px)',
  overflowY: 'scroll',
  minHeight: 0,
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: '16px 20px 100px 20px',
});

export const categoryListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const categoryListTitle = style([
  typography('head_1_18_sb'),
  {
    color: color('grey800'),
    padding: '5px 0',
  },
]);

export const categoryList = style({
  display: 'flex',
  gap: '16px 10px',
  flexWrap: 'wrap',
});
