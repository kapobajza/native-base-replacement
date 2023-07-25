import { getStyleSystemColor } from '../tools';
import type { CreateStyleFunctionArgs, StyledColorKey, SystemConfig } from '../types';

const commonConfig: Omit<CreateStyleFunctionArgs, 'properties'> = {
  transform: getStyleSystemColor,
};

export const color: SystemConfig<StyledColorKey> = {
  color: {
    ...commonConfig,
    properties: ['color'],
    scale: 'colors',
  },
  tintColor: {
    ...commonConfig,
    properties: ['tintColor' as never],
    scale: 'colors',
  },
  backgroundColor: {
    ...commonConfig,
    properties: ['backgroundColor'],
    scale: 'colors',
  },
  bg: {
    ...commonConfig,
    properties: ['backgroundColor'],
    scale: 'colors',
  },
  bgColor: {
    ...commonConfig,
    properties: ['backgroundColor'],
    scale: 'colors',
  },
  background: {
    ...commonConfig,
    properties: ['backgroundColor'],
    scale: 'colors',
  },
  textDecorationColor: {
    ...commonConfig,
    properties: ['textDecorationColor'],
    scale: 'colors',
  },
  opacity: true,
};
