import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  height: 2,
  backgroundColor: color('grey100'),
  marginTop: 10,
});

export const container = style({
  padding: '18px 20px',
});

export const totalCount = style([
  {
    color: color('black'),
  },
  typography('body_3_14_r'),
]);

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const listHeaderLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const deleteAllLabel = style([
  {
    color: color('grey900'),
  },
  typography('body_2_14_sb'),
]);

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 35,
});

export const checkbox = style({
  position: 'absolute',
  top: 3,
  left: 3,
});

export const button = style({
  margin: '0 auto',
});

export const chipContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexWrap: 'wrap',
});
