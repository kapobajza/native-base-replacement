import { Pressable as RNPressable } from 'react-native';
import styled from '~/styled/styled';
import { PressableProps } from './types';

const StyledPressable = styled(RNPressable);

const Pressable = (props: PressableProps) => {
  return <StyledPressable {...props} />;
};

export default Pressable;
