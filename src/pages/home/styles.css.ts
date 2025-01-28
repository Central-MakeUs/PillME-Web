import { style } from '@vanilla-extract/css';
import { color, typography } from '../../ui';

export const home = style({ backgroundColor: color('blue100') });

export const mainContainer = style({
  padding: '60px 20px 86px 20px',
});

export const contentContainer = style({
  display: 'flex',
  gap: 18,
  flexDirection: 'column',
});

export const mainSearchContainer = style([
  contentContainer,
  {
    alignItems: 'center',
  },
]);

export const recommendSearchTitle = style([
  typography('head_1_18_sb'),
  {
    color: color('grey900'),
  },
]);

export const recommendSearchDescription = style([
  typography('body_5_12_r'),
  {
    color: color('grey500'),
  },
]);

export const recommendSearchKeywordContainer = style([
  contentContainer,
  {
    gap: 15,
  },
]);

export const bottomSheetContainer = style({
  backgroundColor: color('white'),
  borderRadius: '20px 20px 0px 0px',
  boxShadow: '0 -1.01px 12.3px 5px rgba(148, 161, 201, 0.3)',
});

export const bottomSheetHealthCategoryContainer = style({
  padding: '16px 20px',
});

export const viewAllButton = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 0',
  borderTop: `1px solid ${color('grey100')}`,
  cursor: 'pointer',
});

export const separator = style({
  height: 10,
  backgroundColor: color('grey100'),
});

export const bottomSheetDescription = style([
  typography('body_3_14_r'),
  {
    color: color('grey600'),
  },
]);

export const recommendCategoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

export const recommendCategoryGallery = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '18px 32px',
});

export const recommendProductContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  padding: '30px 20px 36px 20px',
});
