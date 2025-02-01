import { style } from '@vanilla-extract/css';
import { color, typography } from '@/ui';

export const separator = style({
  height: 2,
  backgroundColor: color('grey100'),
  marginTop: 10,
});

export const container = style({
  padding: '20px 20px 40px 20px',
});

export const pageTitle = style([
  typography('title_1_22_b'),
  {
    color: color('grey800'),
  },
]);

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
});

export const categoryGalleryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

//TODO 타이포 추가 필요
export const categoryGalleryTitle = style([
  {
    color: color('grey800'),
    padding: '5px 0',
  },
]);

export const categoryGallery = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px 48px',
});

export const categoryCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  alignItems: 'center',
});

export const categoryLabel = style([
  typography('body_3_14_r'),
  {
    color: color('black'),
  },
]);
