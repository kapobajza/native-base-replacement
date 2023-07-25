import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { forwardRef } from 'react';

import { styled } from '../../styled';
import type { ForwardRefReturnType } from '../../types';

import type { ViewProps } from './types';

const StyledSafeAreaView = styled(RNSafeAreaView);

const SafeAreaView: ForwardRefReturnType<RNSafeAreaView, ViewProps> =
  forwardRef(({ children, ...props }, ref) => {
    return (
      <StyledSafeAreaView ref={ref} {...props}>
        {children}
      </StyledSafeAreaView>
    );
  });

export default SafeAreaView;
