import { ButtonVariant } from '~/types/theme';
import type { ButtonVariantProps } from './types';

const ctaStyle: ButtonVariantProps = {
  backgroundColor: 'primary.500',
  _text: {
    color: 'grey.1000',
  },
  _disabled: {
    opacity: 1,
    backgroundColor: 'primary.700',
  },
  _pressed: {
    backgroundColor: 'primary.500.alpha:70',
  },
};

const ctaOutlineStyle: ButtonVariantProps = {
  borderColor: 'grey.50',
  borderWidth: '1',
  backgroundColor: 'grey.1000',
  _text: {
    color: 'grey.50',
  },
  _disabled: {
    opacity: 1,
    borderColor: 'grey.700',
    _text: {
      color: 'grey.700',
    },
  },
};

const ctaSmallStyle: ButtonVariantProps = {
  maxWidth: '180',
  height: '11',
};

const buttonVariants: Record<ButtonVariant, ButtonVariantProps> = {
  cta: ctaStyle,
  'cta-small': {
    ...ctaStyle,
    ...ctaSmallStyle,
  },
  'cta-outline': ctaOutlineStyle,
  'cta-outline-small': {
    ...ctaOutlineStyle,
    ...ctaSmallStyle,
  },
  link: {
    _text: {
      variant: 'body',
      fontSize: '14',
    },
  },
};

export default buttonVariants;
