import { TextProps, TextVariant } from './types';

const textVariants: Record<TextVariant, TextProps> = {
  h1: {
    fontWeight: '700',
    fontSize: '28',
    lineHeight: '32',
  },
  h2: {
    fontWeight: '700',
    fontSize: '26',
    lineHeight: '30',
  },
  h3: {
    fontWeight: '700',
    fontSize: '22',
    lineHeight: '26',
  },
  h4: {
    fontWeight: '400',
    fontSize: '20',
    lineHeight: '26',
  },
  h5: {
    fontWeight: '700',
    fontSize: '18',
    lineHeight: '24',
  },
  h6: {
    fontWeight: '700',
    fontSize: '16',
    lineHeight: '22',
  },
  body: {
    fontWeight: '400',
    fontSize: '14',
    lineHeight: '20',
  },
};

export default textVariants;
