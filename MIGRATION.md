# 🦁 Guia de Migração - Design System para @zoo/ui

## ✅ O que já foi feito

### 1. Estrutura do Monorepo

- ✅ Monorepo configurado com Bun workspaces
- ✅ Packages criados: `@zoo/ui`, `@zoo/logic`, `@zoo/cli`
- ✅ TypeScript configurado em todos os packages

### 2. Storybook

- ✅ Storybook configurado no `@zoo/ui`
- ✅ Configuração em `.storybook/main.ts` e `.storybook/preview.tsx`
- ✅ Scripts adicionados ao `package.json`

### 3. Componentes Migrados

#### Atoms (Parcial)

- ✅ **Button** - Componente completo com stories
- ✅ **Badge** - Componente completo com stories
- ✅ **Input** - Componente completo com stories
- ✅ **Card** - Componente completo com stories
- ✅ **Checkbox** - Componente completo com stories
- ✅ **Skeleton** - Componente completo (CardSkeleton, TableSkeleton)
- ✅ **Table** - Componente completo com todas as partes
- ✅ **Tabs** - Componente completo (Tabs, TabsList, TabsTrigger, TabsContent)
- ✅ **Alert** - Componente completo (Alert, AlertTitle, AlertDescription)
- ✅ **AlertDialog** - Componente completo com todas as partes
- ✅ **Dialog** - Componente completo com todas as partes
- ✅ **DropdownMenu** - Componente completo com todas as partes
- ✅ **Sonner** - Componente completo (Toaster, toast)

#### Molecules (Parcial - 8/10 migrados)

- ✅ **ButtonGroup** - Componente completo com stories
- ✅ **PasswordInput** - Componente completo
- ✅ **ImageDropzone** - Componente completo
- ✅ **AuthNavigationLink** - Componente completo (adaptado para não depender de react-router)
- ✅ **AuthFormErrorMessage** - Componente completo (sem animação por padrão)
- ✅ **SocialLoginButtons** - Componente completo (sem framer-motion)
- ✅ **MenuDock** - Componente completo
- ✅ **ThemeToggleButton** - Componente completo (adaptado para aceitar props ou hook)
- ✅ **StatCard** - Componente completo (hook useStatCard migrado para @zoo/logic)
- ✅ **DataTable** - Componente completo (ícones adaptados para lucide-react)

#### Organisms (5/5 migrados - 100% ✅)

- ✅ **DashboardLayout** - Componente completo (agnóstico, com maxWidth configurável)
- ✅ **StatsGrid** - Componente completo (agnóstico, com colunas customizáveis)
- ✅ **MonthlySummary** - Componente completo (agnóstico de moeda e localização)
- ✅ **DashboardHeaderActions** - Componente completo (agnóstico, com labels customizáveis)
- ✅ **DashboardMovementsSection** - Componente completo (agnóstico, renderiza movimentos internamente)

## 📋 Como Migrar um Componente

### Passo 1: Criar estrutura de pastas

```bash
cd zoo/packages/ui/src/components/atoms
mkdir -p nome-do-componente
```

### Passo 2: Copiar e adaptar o componente

1. Copiar o arquivo `.tsx` do design-system
2. Ajustar imports:

   - `@/shared/lib/utils` → `../../lib/utils`
   - `@/shared/design-system/atoms/*` → `../atoms/*`
   - `@/presentation/hooks/*` → (manter ou adaptar)

3. Salvar como `nome-do-componente.tsx` (lowercase)

### Passo 3: Copiar e adaptar stories (se existir)

1. Copiar o arquivo `.stories.tsx`
2. Ajustar:
   - `title: 'Design System/Atoms/...'` → `title: 'Zoo UI/Atoms/...'`
   - `from './ComponentName'` → `from './component-name'`

### Passo 4: Criar index.ts

```typescript
export { ComponentName, componentNameVariants } from "./component-name";
export type { ComponentNameProps } from "./component-name";
```

### Passo 5: Atualizar exports

Adicionar ao `src/components/atoms/index.ts`:

```typescript
export { ComponentName, componentNameVariants } from "./component-name";
export type { ComponentNameProps } from "./component-name";
```

### Passo 6: Atualizar index principal

Adicionar ao `src/index.ts` se necessário (já está exportando tudo de atoms)

## 🔧 Dependências Necessárias

Verificar se todas as dependências estão no `package.json` do `@zoo/ui`:

- `@radix-ui/*` - Componentes Radix UI
- `class-variance-authority` - Variantes de estilo
- `clsx` e `tailwind-merge` - Utilitários de classes
- `sonner` - Para Toaster
- Outras dependências específicas de cada componente

## 📝 Checklist de Migração

Para cada componente:

- [ ] Criar estrutura de pastas
- [ ] Copiar e adaptar componente (.tsx)
- [ ] Ajustar imports
- [ ] Copiar e adaptar stories (.stories.tsx) se existir
- [ ] Criar index.ts
- [ ] Atualizar exports em `atoms/index.ts` ou `molecules/index.ts`
- [ ] Testar no Storybook
- [ ] Verificar TypeScript (sem erros)

## 🚀 Próximos Passos

1. **Completar migração dos Atoms**

   - Migrar todos os componentes atoms restantes
   - Testar no Storybook

2. **Migrar Molecules**

   - Criar estrutura `src/components/molecules/`
   - Migrar componentes compostos
   - Adaptar dependências de atoms

3. **Migrar Organisms**

   - Criar estrutura `src/components/organisms/`
   - Migrar componentes complexos
   - Adaptar dependências

4. **Atualizar Frontend Amanhecer**

   - Atualizar imports para usar `@zoo/ui`
   - Remover design-system antigo
   - Remover Storybook do frontend

5. **Testes e Validação**
   - Testar todos os componentes no Storybook
   - Verificar que não há erros de TypeScript
   - Testar no projeto Amanhecer

## 📚 Estrutura Final Esperada

```
zoo/packages/ui/src/
├── components/
│   ├── atoms/
│   │   ├── button/
│   │   ├── badge/
│   │   ├── input/
│   │   └── ...
│   ├── molecules/
│   │   ├── button-group/
│   │   ├── stat-card/
│   │   └── ...
│   └── organisms/
│       ├── dashboard-layout/
│       └── ...
├── lib/
│   └── utils.ts
└── index.ts
```

## ⚠️ Notas Importantes

1. **Mantendo Atomic Design**: A estrutura deve seguir atoms → molecules → organisms
2. **Imports Relativos**: Usar imports relativos dentro do package
3. **Stories**: Manter todas as stories para documentação
4. **TypeScript**: Garantir que todos os tipos estão corretos
5. **Dependências**: Verificar se todas as dependências estão no package.json
