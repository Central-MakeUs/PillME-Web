import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { color, typography } from '@/ui';

export const wrapper = style({
  padding: '15px 13px',
  width: '100%',
  border: `1px solid ${color('grey200')}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const box = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '70%',
});

export const title = style([typography('head_2_16_sb')]);

export const description = style([
  { display: 'flex', flexWrap: 'wrap' },
  typography('caption_2_10_r'),
]);

export const status = recipe({
  variants: {
    status: {
      충족: { color: color('greenSuccess') },
      부족: { color: color('redDanger') },
      과다: { color: color('yellowWarning') },
    },
  },
});
