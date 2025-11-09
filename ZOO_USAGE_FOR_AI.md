# 🦁 Regras de Uso do Zoo UI e Logic

## Visão Geral

O **Zoo** é um sistema de design system modular que fornece:

- **`@zoo/ui`**: Componentes UI reutilizáveis (atoms, molecules, organisms)
- **`@zoo/logic`**: Hooks headless e lógica reutilizável

## Instalação via CLI

### Inicialização

```bash
# Inicializar configuração do projeto
bunx github:JaimeJunr/Zoo/cli init
```

Isso cria o arquivo `components.json` na raiz do projeto.

### Adicionar Componentes

```bash
# Adicionar um componente
bunx github:JaimeJunr/Zoo/cli add button

# Adicionar múltiplos componentes
bunx github:JaimeJunr/Zoo/cli add button card input badge

# Listar componentes disponíveis
bunx github:JaimeJunr/Zoo/cli list
```

### Adicionar Hooks

```bash
# Adicionar um hook
bunx github:JaimeJunr/Zoo/cli add use-stat-card
```

## Como Funciona

1. **Cópia de Arquivos**: O CLI copia os arquivos dos componentes diretamente para o seu projeto (similar ao shadcn/ui)
2. **Customização Total**: Você pode modificar os componentes copiados conforme necessário
3. **Ajuste Automático de Imports**: Os imports são automaticamente ajustados para usar os aliases do seu projeto
4. **Utils Automático**: O arquivo `utils.ts` (função `cn`) é copiado automaticamente se não existir

## Estrutura de Componentes

### Atoms (Componentes Básicos)

Componentes fundamentais e indivisíveis:

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

### Molecules (Componentes Compostos)

Componentes que combinam atoms:

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

### Organisms (Componentes Complexos)

Componentes de alto nível que combinam molecules:

- `dashboard-layout` - Layout de dashboard
- `stats-grid` - Grid de estatísticas
- `monthly-summary` - Resumo mensal
- `dashboard-header-actions` - Ações do header
- `dashboard-movements-section` - Seção de movimentações

### Hooks (Lógica Headless)

Hooks que fornecem apenas lógica, sem UI:

- `use-stat-card` - Hook para StatCard

## Uso dos Componentes

### Importação de Componentes

Após instalar via CLI, os componentes são copiados para o seu projeto:

```typescript
// Componentes são importados dos caminhos locais
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```

### Exemplo de Uso de Componentes

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulário</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Digite algo..." />
        <Button variant="default" size="md">
          Enviar
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Uso dos Hooks

### Importação de Hooks

```typescript
// Hooks são importados dos caminhos locais
import { useStatCard } from "@/hooks/use-stat-card";
```

### Exemplo de Uso de Hooks

```typescript
import { useStatCard } from "@/hooks/use-stat-card";

function MyComponent() {
  const { value, formattedValue, isLoading } = useStatCard({
    value: 1234.56,
    currency: "BRL",
  });

  return <div>{formattedValue}</div>;
}
```

## Configuração (components.json)

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

Você pode editar o `components.json` para ajustar os caminhos conforme sua estrutura de projeto.

## Dependências Comuns

Os componentes podem requerer:

- **React** 18+ ou 19+
- **Tailwind CSS** configurado
- **Radix UI** (para componentes interativos)
- **lucide-react** (para ícones)
- **class-variance-authority** (para variantes)
- **clsx** e **tailwind-merge** (para classes CSS)

## Padrões Importantes

1. **Componentes são copiados localmente**: Você pode e deve modificar conforme necessário
2. **Hooks são headless**: Fornecem apenas lógica, sem UI
3. **TypeScript**: Todos os componentes têm tipos exportados
4. **Tailwind CSS**: Todos os componentes usam Tailwind para estilização
5. **Acessibilidade**: Componentes interativos usam Radix UI para acessibilidade

## Troubleshooting

### Erro: "components.json não encontrado"

```bash
bunx github:JaimeJunr/Zoo/cli init
```

### Erro: "Não foi possível encontrar o repositório Zoo"

```bash
# Definir variável de ambiente
export ZOO_REPO_PATH=/caminho/para/zoo
bunx github:JaimeJunr/Zoo/cli add button
```

### Erro: "Componente não encontrado"

```bash
# Ver lista de componentes disponíveis
bunx github:JaimeJunr/Zoo/cli list
```

## Quando Usar Cada Tipo

- **Atoms**: Use quando precisar de componentes básicos e reutilizáveis
- **Molecules**: Use quando precisar de componentes compostos que combinam atoms
- **Organisms**: Use quando precisar de componentes complexos e específicos de contexto
- **Hooks**: Use quando precisar apenas de lógica sem UI

## Boas Práticas

1. **Sempre** verificar se o componente já existe antes de criar um novo
2. **Sempre** usar os componentes do Zoo quando disponíveis
3. **Modificar** componentes copiados conforme necessário para seu projeto
4. **Manter** consistência visual usando os componentes do sistema
5. **Usar** hooks headless para lógica reutilizável sem acoplamento de UI
