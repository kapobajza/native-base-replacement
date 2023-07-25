import type { Leaves, NumberRange } from './common';

export type ThemeColorProp = Leaves<ColorMap> | 'transparent';

export type ThemeColorPropWithAlpha = `${ThemeColorProp}.alpha:${NumberRange<
  1,
  101
>}`;

export type ColorHue = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type GreyColorHue = ColorHue & {
  950: string;
  1000: string;
};

export type BlueGreyHue = ColorHue & {
  750: string;
};

export type DigitalYellowColorHue = ColorHue & {
  1000: string;
};

export type GoldenFizzColorHue = Pick<ColorHue, 500 | 600>;

export type PrimaryColorHue = ColorHue & {
  1000: string;
  501: string;
  502: string;
};

export type WarningExtraColorHue = Pick<ColorHue, 50 | 500>;

export type ColorMap = {
  primary: PrimaryColorHue;
  coldGrey: ColorHue;
  blueGrey: BlueGreyHue;
  grey: GreyColorHue;
  success: ColorHue;
  error: ColorHue;
  warning: ColorHue;
  digitalYellow: DigitalYellowColorHue;
  cherry: ColorHue;
  carnation: ColorHue;
  royalPurple: ColorHue;
  summerGreen: ColorHue;
  lagoon: ColorHue;
  warningExtra: WarningExtraColorHue;
  goldenFizz: GoldenFizzColorHue;
};

export type ButtonVariant =
  | 'cta'
  | 'cta-small'
  | 'cta-outline'
  | 'cta-outline-small'
  | 'link';

export type TextInputVariant = 'rounded' | 'chat' | 'unstyled' | 'underlined';
