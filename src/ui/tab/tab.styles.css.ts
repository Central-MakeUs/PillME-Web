import { style } from '@vanilla-extract/css';
import { color } from '../color.css';
import { typography } from '../typography.css';

export const tabsRoot = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
export const tabsList = style({
  display: 'flex',

  borderBottom: '4px solid',
  borderBottomColor: color('grey100'),
});

export const tabsTrigger = style([
  {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '4px 20px',

    selectors: {
      '&::after': {
        content: "''",
        position: 'absolute',
        left: '50%',
        bottom: '-4px',
        height: '4px',
        width: '80%',
        backgroundColor: color('grey100'),
        transform: 'translateX(-50%)',
      },
    },
  },
  typography('head_1_18_sb'),
]);

export const activeTab = style({
  selectors: {
    '&[data-state="active"]::after': {
      backgroundColor: color('grey900'),
    },
  },
});
