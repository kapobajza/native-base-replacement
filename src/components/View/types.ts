import type { ReactNode } from 'react';
import type { ViewProps as RNViewProps } from 'react-native';

import type { ComponentStyledProps } from '../../styled';

export type ViewProps = Omit<RNViewProps, 'children'> &
  ComponentStyledProps & {
    children?: ReactNode | ReactNode[];
  };
