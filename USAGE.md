# 🦁 Guia de Uso do Zoo

## 📦 Estrutura do Monorepo

```
zoo/
├── packages/
│   ├── ui/          # @zoo/ui - Componentes visuais
│   └── logic/       # @zoo/logic - Hooks headless
├── cli/             # @zoo/cli - CLI de instalação
└── package.json     # Configuração do monorepo
```

## 🚀 Desenvolvimento Local

### 1. Instalar Dependências

```bash
cd zoo
bun install
```

### 2. Desenvolvimento com Watch

```bash
# Desenvolvimento de todos os packages
bun run dev

# Desenvolvimento específico
cd packages/ui && bun run dev
cd packages/logic && bun run dev
cd cli && bun run dev
```

### 3. Build

```bash
# Build todos os packages
bun run build

# Build específico
bun run build:ui
bun run build:logic
bun run build:cli
```

### 4. Type Check

```bash
bun run type-check
```

## 📝 Adicionar Novo Componente UI

1. Criar estrutura em `packages/ui/src/components/button/`:

```bash
mkdir -p packages/ui/src/components/button
```

2. Criar arquivos:

   - `button.tsx` - Componente
   - `index.ts` - Barrel export

3. Exportar em `packages/ui/src/index.ts`:

```ts
export { Button, buttonVariants } from "./components/button";
export type { ButtonProps } from "./components/button";
```

## 🎣 Adicionar Novo Hook

1. Criar estrutura em `packages/logic/src/hooks/useThemeToggle/`:

```bash
mkdir -p packages/logic/src/hooks/useThemeToggle
```

2. Criar arquivos:

   - `useThemeToggle.ts` - Hook
   - `index.ts` - Barrel export

3. Exportar em `packages/logic/src/index.ts`:

```ts
export { useThemeToggle } from "./hooks/useThemeToggle";
export type { UseThemeToggleReturn } from "./hooks/useThemeToggle";
```

## 🔧 Usar em Projeto (Amanhecer)

### Opção 1: Link Local (Desenvolvimento)

```bash
# No diretório zoo
bun link

# No diretório frontend do Amanhecer
bun link @zoo/ui
bun link @zoo/logic
```

### Opção 2: Usar CLI (Produção)

```bash
# No diretório frontend do Amanhecer
bunx @zoo/cli init
bunx @zoo/cli add button
bunx @zoo/cli add useThemeToggle
```

## 📚 Publicação (Futuro)

Quando estiver pronto para publicar:

```bash
# Build todos os packages
bun run build

# Publicar (quando configurado)
cd packages/ui && npm publish
cd packages/logic && npm publish
cd cli && npm publish
```

## 🧪 Testes

```bash
# Executar testes
bun test

# Testes específicos
bun test packages/ui
bun test packages/logic
```

## 📋 Checklist para Novo Componente/Hook

- [ ] Criar estrutura de pastas
- [ ] Implementar componente/hook
- [ ] Adicionar tipos TypeScript
- [ ] Exportar em `index.ts` do package
- [ ] Criar testes (opcional)
- [ ] Documentar no README do package
- [ ] Atualizar documentação principal
