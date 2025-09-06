import { useEffect, useState } from "react";

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.theme as Theme) || 'system'
  }
  );

  useEffect(() => {
    const set = () => {
      if (theme === 'system') {
        localStorage.removeItem('theme');
      } else {
        localStorage.theme = theme;
      }

      document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
    };

    set();
  }, [theme]);

  return { theme, setTheme: setThemeState};
}