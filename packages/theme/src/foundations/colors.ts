import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
} from '@radix-ui/colors';

export const mainColors = {
  transparent: 'transparent',
  black: '#00000',
  white: '#FFFFF',
};

export const lightColors = {
  ...blue,
  ...gray,
  ...green,
};

export const darkColors = {
  ...blueDark,
  ...grayDark,
  ...greenDark,
};

export const getColors = (theme: 'dark' | 'light') => {
  const colors = {
    dark: lightColors,
    light: darkColors,
  };

  return {
    ...mainColors,
    ...colors[theme],
  };
};

export type Colors = ReturnType<typeof getColors>;
