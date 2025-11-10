# flowtomic/ui

Componentes UI reutilizáveis baseados em Radix UI e Tailwind CSS.

## Instalação

```bash
bunx flowtomic add button
```

## Estilos

Para usar os componentes com os estilos corretos, importe os arquivos CSS na ordem correta no seu arquivo principal (ex: `src/index.css` ou `src/main.tsx`):

```css
/* 1. globals.css - DEVE vir primeiro para inicializar Tailwind v4 */
@import "flowtomic/ui/styles/globals.css";

/* 2. theme.css - Define variáveis do tema usando @theme (Tailwind v4) */
@import "flowtomic/ui/styles/theme.css";

/* 3. typography.css - Estilos de tipografia que dependem das variáveis */
@import "flowtomic/ui/styles/typography.css";
```

**Requisitos**: Este projeto usa Tailwind CSS v4.1.14 com `@tailwindcss/postcss`. Certifique-se de ter essas dependências instaladas:

```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.14",
    "tailwindcss": "^4.1.14"
  }
}
```

**Nota**: Se você estiver usando o CLI do Flowtomic (`bunx flowtomic init`), os estilos serão configurados automaticamente.

## Uso

```tsx
import { Button } from "flowtomic/ui";

function App() {
  return (
    <Button variant="default" size="md">
      Click me
    </Button>
  );
}
```

## Componentes Disponíveis

- Button
- Card
- Input
- Badge
- Alert
- Dialog
- ... (em desenvolvimento)
