import _ from 'lodash';

import type { StyledTypographyKey, SystemConfig } from '../types';

export const typography: SystemConfig<StyledTypographyKey> = {
  fontFamily: {
    properties: ['fontFamily'],
    scale: 'fonts',
  },
  fontSize: {
    properties: ['fontSize'],
    scale: 'fontSizes',
  },
  fontWeight: {
    properties: ['fontWeight'],
    scale: 'fontWeights',
  },
  lineHeight: {
    properties: ['lineHeight'],
    transform: (_scale, value) => _.toNumber(value),
  },
  letterSpacing: {
    properties: ['letterSpacing'],
  },
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecorationLine: true,
};
