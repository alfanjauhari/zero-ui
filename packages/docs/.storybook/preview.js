import { themes } from '@storybook/theming';
import { ZeroProvider } from '@zero-ui/provider';

export const decorators = [
  (Story) => (
    <ZeroProvider>
      <Story />
    </ZeroProvider>
  ),
];

export const parameters = {
  darkMode: {
    dark: themes.dark,
    light: themes.light,
    darkClass: 'dark',
    lightClass: 'light',
    current: 'light',
    stylePreview: true,
    classTarget: '#__zero',
  },
};
