import { getNumberFromScale, getStyleSystemColor } from '../tools';
import type {
  StyledBorderColorsKey,
  StyledBorderExtraKey,
  StyledBorderRadiiKey,
  StyledBorderWidthKey,
  SystemConfig,
} from '../types';

export const border: SystemConfig<
  StyledBorderExtraKey | StyledBorderColorsKey | StyledBorderRadiiKey | StyledBorderWidthKey
> = {
  borderWidth: {
    properties: ['borderWidth'],
    transform: getNumberFromScale,
  },
  borderStyle: true,
  borderColor: {
    properties: ['borderColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  borderRadius: {
    properties: ['borderRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderTop: true,
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderTopLeftRadius: {
    properties: ['borderTopLeftRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderTopRightRadius: {
    properties: ['borderTopRightRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderRight: true,
  borderBottom: true,
  borderBottomLeftRadius: {
    properties: ['borderBottomLeftRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderBottomRightRadius: {
    properties: ['borderBottomRightRadius'],
    scale: 'radii',
    transform: getNumberFromScale,
  },
  borderLeft: true,
  borderTopWidth: {
    properties: ['borderTopWidth'],
    transform: getNumberFromScale,
  },
  borderTopColor: {
    properties: ['borderTopColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  borderTopStyle: true,
  borderBottomWidth: {
    properties: ['borderBottomWidth'],
    transform: getNumberFromScale,
  },
  borderBottomColor: {
    properties: ['borderBottomColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  borderBottomStyle: true,
  borderLeftWidth: {
    properties: ['borderLeftWidth'],
    transform: getNumberFromScale,
  },
  borderLeftColor: {
    properties: ['borderLeftColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  borderLeftStyle: true,
  borderRightWidth: {
    properties: ['borderRightWidth'],
    transform: getNumberFromScale,
  },
  borderRightColor: {
    properties: ['borderRightColor'],
    scale: 'colors',
    transform: getStyleSystemColor,
  },
  borderRightStyle: true,
};
