import { css } from '@zero-ui/core';

export const buttonStyles = css({
  variants: {
    variant: {
      solid: {},
    },
    color: {
      blue: {},
    },
    size: {
      xs: {
        px: '$2',
        py: '$1',
        fontSize: '$xs',
      },
      sm: {
        px: '$4',
        py: '$2',
        fontSize: '$sm',
      },
      md: {
        px: '$5',
        py: '$3',
        fontSize: '$md',
      },
      lg: {
        px: '$6',
        py: '$4',
        fontSize: '$lg',
      },
    },
    rounded: {
      xs: {
        borderRadius: '$xs',
      },
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      lg: {
        borderRadius: '$lg',
      },
      full: {
        borderRadius: '$full',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'blue',
      css: {
        backgroundColor: '$blue3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$blue4',
        },
        '&:active': {
          backgroundColor: '$blue5',
        },
      },
    },
  ],
  transitionDuration: '500ms',
  defaultVariants: {
    variant: 'solid',
    color: 'blue',
    rounded: 'md',
    size: 'md',
  },
});
