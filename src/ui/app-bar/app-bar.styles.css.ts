import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { typography } from '../typography.css';

export const appBar = recipe({
  base: {
    position: 'relative',
    height: 44,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 440,
  },
  variants: {
    variant: {
      default: [
        typography('title_1_22_b'),
        {
          padding: '0 10px 0 20px',
        },
      ],
      page: [
        typography('head_1_18_sb'),
        {
          justifyContent: 'center',
          padding: '0 10px 0 3px',
        },
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type AppBarVariants = RecipeVariants<typeof appBar>;
