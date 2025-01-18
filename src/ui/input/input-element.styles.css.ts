import { recipe } from '@vanilla-extract/recipes';

export const inputElement = recipe({
  base: {
    width: 24,
    position: 'absolute',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    direction: {
      right: {
        top: 0,
        right: 12,
      },
    },
  },
});
