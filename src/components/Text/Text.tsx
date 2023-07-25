import { Text as RNText } from 'react-native';
import { forwardRef, useMemo } from 'react';

import textVariants from './text.variants';
import { styled } from '~/styled';
import { ForwardRefReturnType } from '~/types/common';
import { TextProps } from './types';

const StyledText = styled(RNText);

const Text: ForwardRefReturnType<RNText, TextProps> = forwardRef(
  ({ children, onPress, isDisabled, variant = 'body', ...props }, ref) => {
    const variantProps = useMemo(() => textVariants[variant], [variant]);

    return (
      <StyledText
        color="grey.50"
        {...variantProps}
        {...props}
        onPress={!isDisabled ? onPress : undefined}
        fontFamily="Roboto"
        ref={ref}>
        {children}
      </StyledText>
    );
  },
);

export default Text;
