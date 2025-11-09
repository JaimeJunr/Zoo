# 🦁 Guia de Uso do CLI Zoo

## 📦 Instalação e Execução

### Via GitHub (Recomendado - sem publicar no npm)

```bash
# Inicializar configuração
bunx github:seu-usuario/zoo/cli init

# Adicionar componentes
bunx github:seu-usuario/zoo/cli add button card input

# Listar componentes disponíveis
bunx github:seu-usuario/zoo/cli list
```

### Via Caminho Local (Desenvolvimento)

```bash
# Se o repositório está em /home/jaime/Amanhecer/zoo
bunx /home/jaime/Amanhecer/zoo/cli init
bunx /home/jaime/Amanhecer/zoo/cli add button
```

### Configurar Variável de Ambiente (Opcional)

Para facilitar, você pode definir a variável de ambiente:

```bash
export ZOO_REPO_PATH=/home/jaime/Amanhecer/zoo
bunx github:seu-usuario/zoo/cli add button
```

## 🚀 Fluxo de Uso

### 1. Inicializar Projeto

```bash
bunx github:seu-usuario/zoo/cli init
```

Isso cria o arquivo `components.json` na raiz do projeto.

### 2. Adicionar Componentes

```bash
# Adicionar um componente
bunx github:seu-usuario/zoo/cli add button

# Adicionar múltiplos
bunx github:seu-usuario/zoo/cli add button card input badge

# Modo interativo (seleciona da lista)
bunx github:seu-usuario/zoo/cli add
```

### 3. Usar no Projeto

```typescript
// Os componentes são copiados para o seu projeto
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
```

## 📋 Componentes Disponíveis

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

### Organisms (5)
- `dashboard-layout` - Layout de dashboard
- `stats-grid` - Grid de estatísticas
- `monthly-summary` - Resumo mensal
- `dashboard-header-actions` - Ações do header
- `dashboard-movements-section` - Seção de movimentações

### Hooks (1)
- `use-stat-card` - Hook para StatCard

## ⚙️ Configuração

O arquivo `components.json` gerado pelo `init`:

```json
{
  "$schema": "https://zoo.dev/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "hooks": "@/hooks"
  },
  "packages": {
    "ui": "@zoo/ui",
    "logic": "@zoo/logic"
  }
}
```

### Personalizar Aliases

Você pode editar o `components.json` para ajustar os caminhos:

```json
{
  "aliases": {
    "components": "@/src/components",
    "utils": "@/src/lib/utils",
    "ui": "@/src/components/ui",
    "hooks": "@/src/hooks"
  }
}
```

## 🔧 Como Funciona

1. **Resolução do Repositório**: O CLI encontra o repositório Zoo via:
   - Variável `ZOO_REPO_PATH`
   - Caminho relativo
   - Caminhos padrão

2. **Cópia de Arquivos**: Os arquivos são copiados do repositório para o seu projeto

3. **Ajuste de Imports**: Os imports são automaticamente ajustados para usar os aliases do seu projeto

4. **Utils**: O arquivo `utils.ts` (função `cn`) é copiado automaticamente se não existir

## 📝 Exemplo Completo

```bash
# 1. Inicializar
bunx github:seu-usuario/zoo/cli init

# 2. Ver componentes disponíveis
bunx github:seu-usuario/zoo/cli list

# 3. Adicionar componentes
bunx github:seu-usuario/zoo/cli add button card input

# 4. Usar no código
```

```typescript
// src/components/ui/button.tsx (copiado automaticamente)
import { Button } from '@/components/ui/button'

function MyComponent() {
  return (
    <Button variant="default" size="sm">
      Clique aqui
    </Button>
  )
}
```

## 🐛 Troubleshooting

### Erro: "components.json não encontrado"
```bash
bunx github:seu-usuario/zoo/cli init
```

### Erro: "Não foi possível encontrar o repositório Zoo"
```bash
# Definir variável de ambiente
export ZOO_REPO_PATH=/caminho/para/zoo
bunx github:seu-usuario/zoo/cli add button
```

### Erro: "Componente não encontrado"
```bash
# Ver lista de componentes disponíveis
bunx github:seu-usuario/zoo/cli list
```

## 🔗 Próximos Passos

Após adicionar componentes:

1. **Instalar dependências** necessárias (se houver)
2. **Configurar Tailwind CSS** (se ainda não estiver)
3. **Importar e usar** os componentes no seu projeto

