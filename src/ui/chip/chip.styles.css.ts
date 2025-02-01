import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { color } from '../color.css';
import { typography } from '../typography.css';
import { globalVars } from './../theme.css';

const base = style([
  {
    border: '1px solid',
    width: 'fit-content',
    backgroundColor: color('white'),
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
]);

export const chipVariants = recipe({
  base,
  variants: {
    shape: {
      pill: { borderRadius: 20, padding: '6px 10px' },
      rect: { borderRadius: 8, padding: '8px 10px' },
    },
    state: {
      default: {
        borderColor: globalVars.color.grey200,
        color: globalVars.color.grey500,
      },
      active: {
        backgroundColor: globalVars.color.blue100,
        color: globalVars.color.mainblue500,
      },
      tag: [
        typography('body_4_12_b'),
        {
          border: 0,
          padding: '4px 10px',
        },
      ],
    },
    color: {
      default: [typography('body_2_14_sb'), {}],
      grey: {
        backgroundColor: globalVars.color.grey200,
        color: globalVars.color.grey500,
      },
      blue: {
        backgroundColor: globalVars.color.blue200,
        color: globalVars.color.blue400,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        state: 'default',
        shape: 'pill',
        color: 'default',
      },
      style: [
        typography('body_3_14_r'),
        {
          color: globalVars.color.grey900,
        },
      ],
    },
  ],
});

export type ChipVariants = Exclude<
  RecipeVariants<typeof chipVariants>,
  undefined
>;

export const chipHasElement = style({
  cursor: 'pointer',
  paddingRight: 2,
});
