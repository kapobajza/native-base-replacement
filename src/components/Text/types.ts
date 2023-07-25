import type { TextProps as RNTextProps } from 'react-native';
import { ComponentStyledProps } from '~/styled/types';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';

export type TextProps = RNTextProps &
  ComponentStyledProps & {
    variant?: TextVariant;
    isDisabled?: boolean;
  };
