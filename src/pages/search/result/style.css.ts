import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const searchContainer = style({
  width: '75%',
});

export const header = style({
  paddingBottom: 10,
  borderBottom: `1px solid ${color('grey100')}`,
});

export const mainContainer = style({
  padding: '0 20px',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const subBanner = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: color('grey600'),
  },
  typography('body_3_14_r'),
]);

export const products = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '35px 15px',
  maxHeight: 'calc(100vh - 150px)',
  width: '100%',
  marginTop: '21px',
});

export const subContainer = style({
  paddingInline: 20,
  paddingTop: 14,
  paddingBottom: 20,
  marginTop: '10px',
  borderTop: '1px solid',

  display: 'flex',
  flexDirection: 'column',
});

export const blueTitle = style([
  {
    color: color('mainblue500'),
  },
  typography('body_2_14_sb'),
]);

export const promptTitle = style([
  {
    color: color('black'),
  },
  typography('title_2_20_b'),
]);

export const propmptDescription = recipe({
  base: [
    {
      color: color('grey800'),
      transition: 'all ease-in-out 0.2s',
    },
    typography('head_1_18_sb'),
  ],
  variants: {
    isFullHeight: {
      true: {},
      false: {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
      },
    },
  },
});

export const tabTitle = style([typography('head_1_18_sb')]);

export const tabChip = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  flexWrap: 'wrap',
});

export const maxWidthBox = style({
  width: 180,
});
