import { ShadowType } from '~/styled/types';
import type { ShadowStyle } from './types';

export const customShadows: Record<ShadowType, ShadowStyle> = {
  0: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  1: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  2: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  3: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 3,
  },
  4: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 4,
  },
  5: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 5,
  },
  6: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 42,
    elevation: 6,
  },
  7: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.12,
    shadowRadius: 64,
    elevation: 7,
  },
  8: {
    shadowColor: 'grey.50',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.14,
    shadowRadius: 88,
    elevation: 8,
  },
};
