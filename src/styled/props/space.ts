import { getSpaceFromScale } from '../tools';
import type { CreateStyleFunctionArgs, StyledSpaceKey, SystemConfig } from '../types';

const spaceConfig: Omit<CreateStyleFunctionArgs, 'properties'> = {
  scale: 'space',
  transform: getSpaceFromScale,
};

const marginConfig: Omit<CreateStyleFunctionArgs, 'properties'> = {
  ...spaceConfig,
};

export const space: SystemConfig<StyledSpaceKey> = {
  margin: {
    ...marginConfig,
    properties: ['margin'],
  },
  m: {
    ...marginConfig,
    properties: ['margin'],
  },
  marginTop: {
    ...marginConfig,
    properties: ['marginTop'],
  },
  mt: {
    ...marginConfig,
    properties: ['marginTop'],
  },
  marginRight: {
    ...marginConfig,
    properties: ['marginRight'],
  },
  mr: {
    ...marginConfig,
    properties: ['marginRight'],
  },
  marginBottom: {
    ...marginConfig,
    properties: ['marginBottom'],
  },
  mb: {
    ...marginConfig,
    properties: ['marginBottom'],
  },
  marginLeft: {
    ...marginConfig,
    properties: ['marginLeft'],
  },
  ml: {
    ...marginConfig,
    properties: ['marginLeft'],
  },
  marginX: {
    ...marginConfig,
    properties: ['marginLeft', 'marginRight'],
  },
  mx: {
    ...marginConfig,
    properties: ['marginLeft', 'marginRight'],
  },
  marginY: {
    ...marginConfig,
    properties: ['marginTop', 'marginBottom'],
  },
  my: {
    ...marginConfig,
    properties: ['marginTop', 'marginBottom'],
  },
  padding: {
    ...spaceConfig,
    properties: ['padding'],
  },
  p: {
    ...spaceConfig,
    properties: ['padding'],
  },
  paddingTop: {
    ...spaceConfig,
    properties: ['paddingTop'],
  },
  pt: {
    ...spaceConfig,
    properties: ['paddingTop'],
  },
  paddingRight: {
    ...spaceConfig,
    properties: ['paddingRight'],
  },
  pr: {
    ...spaceConfig,
    properties: ['paddingRight'],
  },
  paddingBottom: {
    ...spaceConfig,
    properties: ['paddingBottom'],
  },
  pb: {
    ...spaceConfig,
    properties: ['paddingBottom'],
  },
  paddingLeft: {
    ...spaceConfig,
    properties: ['paddingLeft'],
  },
  pl: {
    ...spaceConfig,
    properties: ['paddingLeft'],
  },
  paddingX: {
    ...spaceConfig,
    properties: ['paddingLeft', 'paddingRight'],
  },
  px: {
    ...spaceConfig,
    properties: ['paddingLeft', 'paddingRight'],
  },
  paddingY: {
    ...spaceConfig,
    properties: ['paddingTop', 'paddingBottom'],
  },
  py: {
    ...spaceConfig,
    properties: ['paddingTop', 'paddingBottom'],
  },
  gap: {
    ...spaceConfig,
    properties: ['gap'],
  },
};
