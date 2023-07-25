import { getSpaceFromScale } from '../tools';
import type { CreateStyleFunctionArgs, StyledPositionExtraKey, StyledPositionKey, SystemConfig } from '../types';

const spaceConfig: Omit<CreateStyleFunctionArgs, 'properties'> = {
  scale: 'space',
  transform: getSpaceFromScale,
};

export const position: SystemConfig<StyledPositionKey | StyledPositionExtraKey> = {
  position: true,
  top: {
    properties: ['top'],
    ...spaceConfig,
  },
  right: {
    properties: ['right'],
    ...spaceConfig,
  },
  bottom: {
    properties: ['bottom'],
    ...spaceConfig,
  },
  left: {
    properties: ['left'],
    ...spaceConfig,
  },
};
