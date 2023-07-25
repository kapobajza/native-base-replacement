import {
  customColors,
  customLayout,
  customSpace,
  customRadii,
  customFonts,
  customZIndices,
  customFontWeights,
  customFontSizes,
  customShadows,
} from './custom';

export const defaultTheme = {
  space: customSpace,
  sizes: customLayout,
  colors: customColors,
  fonts: customFonts,
  fontWeights: customFontWeights,
  radii: customRadii,
  zIndices: customZIndices,
  fontSizes: customFontSizes,
  shadows: customShadows,
} as const;

export type MainTheme = typeof defaultTheme;
