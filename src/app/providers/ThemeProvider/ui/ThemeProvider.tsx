import React, { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
export const ThemeProvider: FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
