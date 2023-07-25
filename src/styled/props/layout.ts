import { getNumberFromScale } from '../tools';
import type { StyledLayoutExtraKey, StyledLayoutKey, SystemConfig } from '../types';

export const layout: SystemConfig<StyledLayoutKey | StyledLayoutExtraKey> = {
  width: {
    properties: ['width'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  w: {
    properties: ['width'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  height: {
    properties: ['height'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  h: {
    properties: ['height'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  minWidth: {
    properties: ['minWidth'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  minW: {
    properties: ['minWidth'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  minHeight: {
    properties: ['minHeight'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  minH: {
    properties: ['minHeight'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  maxWidth: {
    properties: ['maxWidth'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  maxW: {
    properties: ['maxWidth'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  maxHeight: {
    properties: ['maxHeight'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  maxH: {
    properties: ['maxHeight'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
    transform: getNumberFromScale,
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  textAlign: true,
};
