import type { ViewStyle } from 'react-native';
import { ThemeColorProp } from '~/types/theme';

export type ShadowStyle = Pick<
  ViewStyle,
  'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
> & {
  shadowColor: ThemeColorProp;
};
