import { View as RNView } from 'react-native';
import { forwardRef } from 'react';

import { styled } from '../../styled';
import type { ForwardRefReturnType } from '../../types';

import type { ViewProps } from './types';

const StyledView = styled(RNView);

const View: ForwardRefReturnType<RNView, ViewProps> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <StyledView ref={ref} {...props}>
        {children}
      </StyledView>
    );
  },
);

export default View;
