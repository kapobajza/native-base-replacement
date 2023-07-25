import { createContext, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { defaultTheme, MainTheme } from './theme';

import type { ThemeProviderProps } from './types';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const ThemeContext = createContext<MainTheme | undefined>(undefined);

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return (
    <SafeAreaProvider initialMetrics={inset}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </SafeAreaProvider>
  );
};

export const useTheme = (): MainTheme => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error(`useTheme must be used within ${ThemeProvider.name}`);
  }

  return theme;
};
