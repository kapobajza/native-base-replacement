import { background } from './background';
import { border } from './border';
import { color } from './color';
import { flexbox } from './flexbox';
import { layout } from './layout';
import { position } from './position';
import { shadow } from './shadow';
import { space } from './space';
import { typography } from './typography';
import { zIndex } from './zIndex';

export const allStyledConfig = {
  ...background,
  ...border,
  ...color,
  ...flexbox,
  ...layout,
  ...position,
  ...shadow,
  ...space,
  ...typography,
  ...zIndex,
};
