import { useTheme } from '@zero-ui/hooks';
import { ReactElement } from 'react';
import { globalCSS } from './global-css';

import { useDarkMode } from 'storybook-dark-mode';

export interface ZeroProviderProps {
  children?: ReactElement;
  mode?: 'light' | 'dark';
}

export function ZeroProvider({ children, mode }: ZeroProviderProps) {
  const storybookMode = useDarkMode() ? 'dark' : 'light';
  const currentMode = mode || storybookMode;

  console.log(currentMode);
  const theme = useTheme(currentMode);

  globalCSS();

  return (
    <div id="__zero" className={theme}>
      {children}
    </div>
  );
}
