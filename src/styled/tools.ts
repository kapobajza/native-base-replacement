import _ from 'lodash';
import Color from 'tinycolor2';

import type { TransformFunction } from './types';

export const convertStringNumberToNumber = (
  key: string,
  value: string | number,
) => {
  if (
    typeof value === 'string' &&
    key !== 'fontWeight' &&
    value &&
    !isNaN(Number(value))
  ) {
    return parseFloat(value);
  }

  return value;
};

export const getTransparentColor = (color: string, opacity: number) => {
  return Color(color).setAlpha(opacity).toRgbString();
};

const __ALPHA_KEYWORD__ = '.alpha:';

export const getStyleSystemColor: TransformFunction = (scale, value, theme) => {
  if (typeof value === 'string' && value.includes(__ALPHA_KEYWORD__)) {
    const [color, opacity] = value.split(__ALPHA_KEYWORD__);

    if (!color || !opacity) {
      return _.get(scale, value, value);
    }

    const parsedOpacity = parseInt(opacity, 10);

    if (
      !_.isNumber(parsedOpacity) ||
      parsedOpacity < 0 ||
      parsedOpacity > 100
    ) {
      return _.get(scale, value, value);
    }

    const rawColor = _.get(theme, `colors.${color}`, color);

    return getTransparentColor(rawColor, parsedOpacity / 100);
  }

  return _.get(scale, `${value as string}`, value) as string;
};

export const getNumberFromScale: TransformFunction = (scale, value) => {
  if (_.isUndefined(value)) {
    return value;
  }

  if (typeof value === 'number') {
    return value;
  }

  const scaledValue = _.get(scale, value) as string | undefined;

  if (typeof value === 'string') {
    if (value.includes('%')) {
      return value;
    } else if (value.includes('px')) {
      value = value.replace('px', '');
    } else if (scaledValue !== undefined) {
      return scaledValue;
    }
  }

  return _.toNumber(value);
};

export const getSpaceFromScale: TransformFunction = (scale, value) => {
  if (typeof value === 'number') {
    return value;
  }

  return _.get(scale, value, value);
};
