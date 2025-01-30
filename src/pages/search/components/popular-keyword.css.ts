import { style } from '@vanilla-extract/css';
import { typography } from '@/ui';

export const container = style({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

export const title = style([{}, typography('head_1_18_sb')]);

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(5, auto)',
  gap: '25px 0',
});

export const keywordItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '156px',
});

export const rank = style([{}, typography('body_2_14_sb')]);

export const keyword = style([{}, typography('body_3_14_r')]);
