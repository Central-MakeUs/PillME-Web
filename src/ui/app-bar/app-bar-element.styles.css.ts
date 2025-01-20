import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const appBarElement = recipe({
  base: {
    position: 'absolute',
    width: 44,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    direction: {
      left: {
        top: 0,
        left: 3,
      },
      right: {
        top: 0,
        right: 10,
      },
    },
  },
});

export type AppBarElementVariant = Exclude<
  RecipeVariants<typeof appBarElement>,
  undefined
>;
