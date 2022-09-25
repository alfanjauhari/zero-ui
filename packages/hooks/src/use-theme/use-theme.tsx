import { createTheme, theme as lightTheme } from '@zero-ui/core';
import { darkTheme } from '@zero-ui/theme';

export function useTheme(mode?: 'light' | 'dark') {
  const zeroProvider = document.getElementById('__zero');

  if (!zeroProvider && !mode) {
    throw new Error('Missing ZeroProvider element!');
  }

  if (zeroProvider) {
    console.log(zeroProvider.classList);
    return zeroProvider.classList.contains('light')
      ? lightTheme
      : createTheme(darkTheme);
  }

  return mode === 'light' ? lightTheme : createTheme(darkTheme);
}
