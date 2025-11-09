# Estrutura de Hook Headless

Cada hook deve seguir esta estrutura:

```
useThemeToggle/
├── useThemeToggle.ts   # Hook principal
├── useThemeToggle.test.ts  # Testes (opcional)
├── index.ts            # Barrel export
└── README.md           # Documentação (opcional)
```

## Exemplo: useThemeToggle

```tsx
// useThemeToggle.ts
import { useCallback } from "react";
import { useThemeStore } from "./themeStore";

export interface UseThemeToggleReturn {
  theme: "light" | "dark";
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  setLight: () => void;
  setDark: () => void;
}

/**
 * Hook headless para controle de tema
 *
 * Fornece apenas lógica, estado e API
 * NÃO fornece markup ou styles
 */
export function useThemeToggle(): UseThemeToggleReturn {
  const { theme, setTheme: setThemeStore } = useThemeStore();

  const toggleTheme = useCallback(() => {
    setThemeStore(theme === "light" ? "dark" : "light");
  }, [theme, setThemeStore]);

  const setTheme = useCallback(
    (newTheme: "light" | "dark") => {
      setThemeStore(newTheme);
    },
    [setThemeStore]
  );

  const setLight = useCallback(() => {
    setThemeStore("light");
  }, [setThemeStore]);

  const setDark = useCallback(() => {
    setThemeStore("dark");
  }, [setThemeStore]);

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    toggleTheme,
    setTheme,
    setLight,
    setDark,
  };
}

// index.ts
export { useThemeToggle } from "./useThemeToggle";
export type { UseThemeToggleReturn } from "./useThemeToggle";
```

## Princípios do Headless UI

1. **Apenas Lógica**: Hook fornece estado e funções, não markup
2. **Flexibilidade**: Você controla completamente a apresentação
3. **Reutilização**: Lógica separada da apresentação
4. **Testabilidade**: Fácil de testar sem dependências de UI
