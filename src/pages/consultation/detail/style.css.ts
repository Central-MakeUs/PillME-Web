import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const containerQuestion = style([
  {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    color: color('grey900'),
  },
  typography('body_1_16_r'),
]);

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

export const spacer = style({
  background: color('grey100'),
});

export const containerProfile = style({
  padding: 20,
  display: 'flex',
  gap: 10,
});

export const profileContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 6,
  },
  typography('body_1_16_r'),
]);

export const profileTitle = style([
  {
    color: color('grey900'),
  },
  typography('head_1_18_sb'),
]);

export const profileTags = style([
  {
    display: 'flex',
    gap: 4,
  },
  typography('body_5_12_r'),
]);

export const profileTagImportant = style({
  color: color('mainblue500'),
});

export const containerDesc = style({
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 400px)',
});

export const date = style([
  {
    marginTop: 30,
    marginBottom: 50,
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);

export const btn = style({
  alignSelf: 'center',
  marginTop: 'auto',
  width: '100%',
});
