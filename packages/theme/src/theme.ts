import { ConfigType } from '@stitches/react/types/config';
import {
  Colors,
  fontSizes,
  getColors,
  radius as radii,
  spaces as space,
} from './foundations';

export interface DefaultTheme extends ConfigType.Theme {
  colors: Colors;
  space: typeof space;
  radii: typeof radii;
  fontSizes: typeof fontSizes;
}

export const defaultTheme: DefaultTheme = {
  colors: getColors('light'),
  space,
  radii,
  fontSizes,
};

export const darkTheme = {
  colors: getColors('dark'),
};
