# ⚛️ Atoms - Componentes Básicos

Componentes atômicos básicos do Flowtomic. São os blocos fundamentais da interface.

## 📦 Componentes Disponíveis (13)

### `button`

Botão com variantes de estilo e tamanho.

**Dependências**: `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`

### `badge`

Badge/etiqueta para destacar informações.

**Dependências**: `class-variance-authority`, `clsx`, `tailwind-merge`

### `input`

Campo de entrada de texto.

**Dependências**: `@radix-ui/react-label`, `clsx`, `tailwind-merge`

### `card`

Container de card para agrupar conteúdo.

**Dependências**: `clsx`, `tailwind-merge`

### `checkbox`

Checkbox para seleção múltipla.

**Dependências**: `@radix-ui/react-checkbox`, `clsx`, `tailwind-merge`

### `skeleton`

Componente de loading skeleton.

**Dependências**: `clsx`, `tailwind-merge`

### `table`

Tabela base para exibição de dados.

**Dependências**: `clsx`, `tailwind-merge`

### `tabs`

Sistema de abas para organização de conteúdo.

**Dependências**: `@radix-ui/react-tabs`, `clsx`, `tailwind-merge`

### `alert`

Alerta para exibir mensagens importantes.

**Dependências**: `clsx`, `tailwind-merge`

### `alert-dialog`

Diálogo de confirmação para ações importantes.

**Dependências**: `@radix-ui/react-alert-dialog`, `clsx`, `tailwind-merge`

### `dialog`

Modal/diálogo para exibir conteúdo sobreposto.

**Dependências**: `@radix-ui/react-dialog`, `clsx`, `tailwind-merge`

### `dropdown-menu`

Menu dropdown para ações e navegação.

**Dependências**: `@radix-ui/react-dropdown-menu`, `clsx`, `tailwind-merge`

### `sonner`

Sistema de notificações toast.

**Dependências**: `sonner`, `lucide-react`, `clsx`, `tailwind-merge`

## 🚀 Instalação

```bash
# Instalar um atom específico
npx flowtomic@latest add button

# Instalar múltiplos atoms
npx flowtomic@latest add button badge input card
```

## 📖 Exemplos de Uso

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exemplo</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Digite algo..." />
        <Button>Enviar</Button>
      </CardContent>
    </Card>
  );
}
```
