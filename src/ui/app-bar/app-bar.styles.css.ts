import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { typography } from '../typography.css';

export const appBar = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 440,
    // height: 44,
  },
  variants: {
    variant: {
      default: [
        typography('title_1_22_b'),
        {
          padding: '6px 10px 6px 20px',
        },
      ],
      page: [
        typography('head_1_18_sb'),
        {
          justifyContent: 'center',
          padding: '6px 10px 6px 3px',
        },
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type AppBarVariants = RecipeVariants<typeof appBar>;
