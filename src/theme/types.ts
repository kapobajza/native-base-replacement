import type { ReactNode } from 'react';
import { MainTheme } from './theme';

export type ThemeProviderProps = {
  children?: ReactNode;
  theme?: MainTheme;
};
