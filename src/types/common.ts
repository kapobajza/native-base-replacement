import type { forwardRef } from 'react';

export type BaseComponentProps = {
  testID?: string;
};

export type OfflineComponentProps = {
  offlineAlertText?: string;
  onOfflinePress?: (() => void) | null;
};

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type NumberRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type ForwardRefReturnType<Component, Props> = ReturnType<
  typeof forwardRef<Component, Props>
>;
