import _ from 'lodash';

import type { StyledZIndexKey, SystemConfig } from '../types';

export const zIndex: SystemConfig<StyledZIndexKey> = {
  zIndex: {
    properties: ['zIndex'],
    scale: 'zIndices',
    transform: (scale, value) => {
      if (typeof value === 'number') {
        return value;
      }

      return _.get(scale, value, value);
    },
  },
};
