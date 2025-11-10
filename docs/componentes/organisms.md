# 🦠 Organisms - Componentes Complexos

Componentes organizacionais do Flowtomic. São componentes complexos que combinam múltiplos molecules e atoms.

## 📦 Componentes Disponíveis (5)

### `dashboard-layout`

Layout completo de dashboard com sidebar e header.

**Dependências**: `clsx`, `tailwind-merge`

### `stats-grid`

Grid de estatísticas para exibir múltiplos cards de estatística.

**Dependências**: `clsx`, `tailwind-merge`

### `monthly-summary`

Resumo mensal com gráficos e estatísticas.

**Dependências**: `lucide-react`, `clsx`, `tailwind-merge`

### `dashboard-header-actions`

Ações do header do dashboard (notificações, perfil, etc.).

**Dependências**: `lucide-react`, `clsx`, `tailwind-merge`

### `dashboard-movements-section`

Seção de movimentações do dashboard com tabela e filtros.

**Dependências**: `lucide-react`, `clsx`, `tailwind-merge`

## 🚀 Instalação

```bash
# Instalar um organism específico
npx flowtomic@latest add dashboard-layout

# Instalar múltiplos organisms
npx flowtomic@latest add dashboard-layout stats-grid monthly-summary
```

## 📖 Exemplos de Uso

```typescript
import { DashboardLayout } from "@/components/ui/dashboard-layout";
import { StatsGrid } from "@/components/ui/stats-grid";
import { MonthlySummary } from "@/components/ui/monthly-summary";

export function DashboardPage() {
  return (
    <DashboardLayout>
      <StatsGrid
        stats={[
          { title: "Vendas", value: "R$ 10.000", trend: "+12%" },
          { title: "Usuários", value: "1.234", trend: "+5%" },
        ]}
      />
      <MonthlySummary data={monthlyData} />
    </DashboardLayout>
  );
}
```
