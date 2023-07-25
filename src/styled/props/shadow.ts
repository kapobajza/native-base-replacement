import _ from 'lodash';
import { ShadowStyle } from '~/theme/custom';

import { getStyleSystemColor } from '../tools';
import type { StyledShadowKey, SystemConfig } from '../types';

export const shadow: SystemConfig<StyledShadowKey> = {
  shadowColor: {
    properties: ['shadowColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  shadowOffset: {
    properties: ['shadowOffset'],
    transform: (_scale, path) => {
      const [width, height] = path as unknown as [number, number];

      return { width, height } as never;
    },
  },
  shadowOpacity: {
    properties: ['shadowOpacity'],
  },
  shadowRadius: {
    properties: ['shadowRadius'],
  },
  elevation: {
    properties: ['elevation'],
  },
  shadow: {
    properties: [
      'shadowColor',
      'shadowOpacity',
      'shadowRadius',
      'shadowOffset',
      'elevation',
    ],
    scale: 'shadows',
    transform: (scale, path, theme, property) => {
      if (!property) {
        return undefined;
      }

      const shadowProperty = property as keyof ShadowStyle;

      // eslint-disable-next-line @typescript-eslint/no-shadow
      const shadow = scale[path] as unknown as ShadowStyle;

      if (property === 'shadowColor') {
        return _.get(
          theme,
          `colors.${shadow.shadowColor}`,
          shadow.shadowColor,
        ) as string;
      }

      return shadow[shadowProperty] as string;
    },
  },
};
