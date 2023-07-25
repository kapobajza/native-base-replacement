import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native/types';
import { ComponentStyledProps } from '~/styled/types';
import { ButtonVariant } from '~/types';
import { PressableProps } from '../Pressable/types';
import { TextProps } from '../Text/types';

export type ButtonProps = Omit<PressableProps, 'onPress'> & {
  variant?: ButtonVariant;
  startIcon?: ReactElement | null;
  _text?: TextProps;
  _disabled?: ComponentStyledProps & {
    _text?: TextProps;
  };
  _pressed?: PressableProps;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ButtonVariantProps = Omit<
  ButtonProps,
  'variant' | 'onPress' | 'title'
>;
