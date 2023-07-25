import { FontFamily, FontSize, FontWeight } from '~/styled/types';

export const customFonts: Record<FontFamily, `${FontFamily}-Regular`> = {
  Roboto: 'Roboto-Regular',
};

export const customFontSizes: Record<FontSize, number> = {
  '8': 8,
  '10': 10,
  '12': 12,
  '13': 13,
  '14': 14,
  '16': 16,
  '18': 18,
  '20': 20,
  '22': 22,
  '24': 24,
  '26': 26,
  '28': 28,
};

export const customFontWeights: Record<FontWeight, string> = {
  '100': '100',
  '200': '200',
  '300': '300',
  '400': '400',
  '500': '500',
  '600': '600',
  '700': '700',
  '800': '800',
  '900': '900',
  medium: '500',
  bold: '700',
  regular: '400',
};
