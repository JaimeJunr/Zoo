# 🪝 Hooks - Hooks Headless

Hooks headless do Flowtomic para lógica reutilizável sem dependências de UI.

## 📦 Hooks Disponíveis (1)

### `use-stat-card`

Hook para gerenciar estado e lógica do componente StatCard.

**Dependências**: `react`

**Localização**: `packages/logic/src/hooks/useStatCard.ts`

## 🚀 Instalação

```bash
# Instalar o hook
npx flowtomic@latest add use-stat-card
```

## 📖 Exemplo de Uso

```typescript
import { useStatCard } from "@/hooks/use-stat-card";

export function StatCardExample() {
  const { value, formattedValue, isLoading } = useStatCard({
    initialValue: 1000,
    format: "currency",
  });

  return (
    <div>
      <p>Valor: {formattedValue}</p>
      {isLoading && <p>Carregando...</p>}
    </div>
  );
}
```

## 🎯 Filosofia dos Hooks

Os hooks do Flowtomic são **headless**, ou seja, não possuem dependências de UI. Isso permite:

- Reutilização em diferentes contextos
- Testabilidade facilitada
- Separação de lógica e apresentação
- Flexibilidade na implementação da UI
