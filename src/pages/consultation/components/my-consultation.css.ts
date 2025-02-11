import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const container = style({
  background: color('blue100'),
  height: '100%',
  padding: '32px 20px 0 20px',
});

export const chipContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});
export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  marginTop: 21,
});
export const chipStyle = style({
  width: 92,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardContainer = style({
  height: 125,
  backgroundColor: color('white'),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '13px 34px',
  borderRadius: 8,
});

export const cardQ = style([
  {
    color: color('mainblue500'),
    marginRight: 3,
  },
  typography('head_1_18_sb'),
]);

export const cardTitle = style([
  {
    color: color('grey900'),
  },
  typography('head_1_18_sb'),
]);

export const cardSubTitle = style([
  {
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);

export const cardButton = style({
  alignSelf: 'end',
});

export const cardButtonDelete = style({
  alignSelf: 'end',
  width: 72,
});

export const emptyContainer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
});
export const emptyTitle = style([
  {
    color: color('grey600'),
  },
  typography('head_2_16_sb'),
]);
export const emptySubTitle = style([
  {
    color: color('grey500'),
  },
  typography('body_3_14_r'),
]);
