import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../theme.css';
import { typography } from '../typography.css';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '40px',
  transition: 'all 0.1s ease-in-out',
  userSelect: 'none',
});

export const buttonVariants = recipe({
  base,
  variants: {
    variant: {
      primary: {
        backgroundColor: globalVars.color.mainblue500,
        color: globalVars.color.white,
        ':active': {
          backgroundColor: globalVars.color.blue700,
          color: globalVars.color.blue300,
        },
        '& svg': { color: globalVars.color.white, display: 'flex' },
        '&:active svg': { color: globalVars.color.blue300 },
      },
      secondary: {
        backgroundColor: globalVars.color.white,
        color: globalVars.color.mainblue500,
        border: `1px solid ${globalVars.color.mainblue500}`,
      },
      third: {
        backgroundColor: globalVars.color.white,
        color: globalVars.color.grey800,
        border: `1px solid ${globalVars.color.grey300}`,
        '& svg': { display: 'flex' },
      },
    },
    size: {
      large: [
        { padding: '6px 16px', width: '335px', height: '54px' },
        typography('head_2_16_sb'),
      ],
      middle: [
        { padding: '6px 14px', width: '160px', height: '44px' },
        typography('head_2_16_sb'),
      ],
      small: [
        { padding: '6px 14px', width: '116px', height: '36px' },
        typography('body_2_14_sb'),
      ],
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'third', size: 'small' },
      style: {
        width: '218px',
        height: '36px',
        padding: '6px 6px',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
});

export type ButtonVariants = Exclude<
  Parameters<typeof buttonVariants>[0],
  undefined
>;
