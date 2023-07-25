import { useMemo, useState } from 'react';
import { GestureResponderEvent } from 'react-native/types';
import { Pressable } from '../Pressable';

import { Text } from '../Text';

import buttonVariants from './button.variants';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    title,
    disabled = false,
    onPressIn,
    onPressOut,
    _text,
    _disabled,
    _pressed,
    variant = 'cta',
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState(false);

  const variantProps = useMemo(() => buttonVariants[variant], [variant]);

  const disabledProps = useMemo(
    () => (disabled ? _disabled || variantProps._disabled : {}),
    [disabled, _disabled, variantProps._disabled],
  );

  const disabledTextProps = useMemo(
    () => (disabled ? _disabled?._text || variantProps._disabled?._text : {}),
    [disabled, _disabled?._text, variantProps._disabled?._text],
  );

  const pressedProps = useMemo(
    () => (isPressed ? _pressed || variantProps._pressed : {}),
    [isPressed, _pressed, variantProps._pressed],
  );

  const handlePressIn = (event: GestureResponderEvent) => {
    onPressIn?.(event);
    setIsPressed(true);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    onPressOut?.(event);
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      borderRadius="full"
      height="14"
      justifyContent="center"
      alignItems="center"
      {...variantProps}
      {...pressedProps}
      {...rest}
      {...disabledProps}>
      <Text
        fontWeight="medium"
        numberOfLines={1}
        textAlign="center"
        {...variantProps._text}
        {..._text}
        {...disabledTextProps}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
