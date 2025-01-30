import { style } from '@vanilla-extract/css';
import { typography } from '@/ui';

export const container = style({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

export const head = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style([{}, typography('head_1_18_sb')]);

export const body = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  width: '100%',
});
