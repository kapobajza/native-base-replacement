import { CustomSpace } from '~/theme/custom';

export type CustomSpacePropValue = CustomSpace | number;

export type CustomLayoutPropValue =
  | CustomSpacePropValue
  | (string & {})
  | number;
