# 🦁 Zoo Monorepo

Biblioteca de componentes UI e hooks reutilizáveis para projetos React/TypeScript.

## 📦 Estrutura

```
zoo/
├── packages/
│   ├── ui/          # Componentes UI (@zoo/ui)
│   └── logic/       # Hooks e lógica (@zoo/logic)
└── cli/             # CLI para instalação (@zoo/cli)
```

## 🚀 Instalação via CLI

### Usar via GitHub (sem publicar no npm)

```bash
# Inicializar configuração
bunx github:seu-usuario/zoo/cli init

# Adicionar componentes
bunx github:seu-usuario/zoo/cli add button card input

# Listar componentes disponíveis
bunx github:seu-usuario/zoo/cli list
```

### Configurar Variável de Ambiente (Opcional)

Para facilitar, defina a variável de ambiente:

```bash
export ZOO_REPO_PATH=/caminho/para/zoo
bunx github:seu-usuario/zoo/cli add button
```

## 📚 Componentes Disponíveis

### Atoms (13)

- `button` - Botão com variantes
- `badge` - Badge/etiqueta
- `input` - Campo de entrada
- `card` - Card container
- `checkbox` - Checkbox
- `skeleton` - Loading skeleton
- `table` - Tabela base
- `tabs` - Abas
- `alert` - Alerta
- `alert-dialog` - Diálogo de confirmação
- `dialog` - Modal/diálogo
- `dropdown-menu` - Menu dropdown
- `sonner` - Toast notifications

### Molecules (10)

- `button-group` - Grupo de botões
- `password-input` - Input de senha
- `image-dropzone` - Upload de imagem
- `stat-card` - Card de estatística
- `data-table` - Tabela avançada
- `menu-dock` - Dock de menu
- `theme-toggle-button` - Botão de toggle de tema
- `auth-navigation-link` - Link de navegação de auth
- `auth-form-error-message` - Mensagem de erro de formulário
- `social-login-buttons` - Botões de login social

### Organisms (5)

- `dashboard-layout` - Layout de dashboard
- `stats-grid` - Grid de estatísticas
- `monthly-summary` - Resumo mensal
- `dashboard-header-actions` - Ações do header
- `dashboard-movements-section` - Seção de movimentações

### Hooks (1)

- `use-stat-card` - Hook para StatCard

## 🛠️ Desenvolvimento

### Setup

```bash
# Instalar dependências
bun install

# Build todos os packages
bun run build

# Build específico
bun run build:ui
bun run build:logic
bun run build:cli

# Type check
bun run type-check
```

### CLI

```bash
cd cli
bun run dev      # Modo desenvolvimento
bun run build    # Build
bun run type-check
```

## 📖 Documentação

- [CLI_USAGE.md](./CLI_USAGE.md) - Guia completo de uso do CLI
- [MIGRATION.md](./MIGRATION.md) - Guia de migração de componentes
- [STATUS.md](./STATUS.md) - Status atual da migração
- [USAGE.md](./USAGE.md) - Guia de uso do monorepo

## 🎯 Como Funciona

O CLI copia os arquivos dos componentes diretamente para o seu projeto (similar ao shadcn/ui), permitindo customização total. Os imports são automaticamente ajustados para usar os aliases do seu projeto.

## 📝 Exemplo

```bash
# 1. Inicializar
bunx github:seu-usuario/zoo/cli init

# 2. Adicionar componentes
bunx github:seu-usuario/zoo/cli add button card input

# 3. Usar no projeto
```

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```

## 🔗 Links

- [Documentação do CLI](./cli/README.md)
- [Guia de Uso do CLI](./CLI_USAGE.md)
