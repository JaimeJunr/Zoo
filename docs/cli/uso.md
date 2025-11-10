# 🎯 Guia de Uso do CLI Flowtomic

> **Objetivo**: Guia prático para usar o CLI do Flowtomic em seus projetos, incluindo exemplos, configurações e troubleshooting.

## 🚀 Início Rápido

### 1. Inicializar Projeto

```bash
# Inicializar configuração do Flowtomic
npx flowtomic@latest init
```

Isso cria o arquivo `components.json` na raiz do seu projeto.

### 2. Adicionar Componentes

```bash
# Adicionar componentes básicos
npx flowtomic@latest add button card input

# Adicionar componentes compostos
npx flowtomic@latest add button-group data-table stat-card

# Adicionar componentes complexos
npx flowtomic@latest add dashboard-layout stats-grid
```

### 3. Adicionar Blocks

```bash
# Adicionar um block completo
npx flowtomic@latest add-block dashboard-01
```

## 📝 Exemplos Práticos

### Criar Formulário de Login

```bash
# 1. Adicionar componentes necessários
npx flowtomic@latest add input button card password-input

# 2. Usar no código
```

```typescript
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Email" type="email" />
        <PasswordInput placeholder="Senha" />
        <Button>Entrar</Button>
      </CardContent>
    </Card>
  );
}
```

### Criar Dashboard

```bash
# 1. Adicionar block completo
npx flowtomic@latest add-block dashboard-01

# 2. O block já vem com todos os componentes necessários
```

### Criar Tabela de Dados

```bash
# 1. Adicionar data-table
npx flowtomic@latest add data-table

# 2. Usar no código
```

```typescript
import { DataTable } from "@/components/ui/data-table";

export function UsersTable() {
  const columns = [
    { accessorKey: "name", header: "Nome" },
    { accessorKey: "email", header: "Email" },
  ];

  const data = [
    { name: "João", email: "joao@example.com" },
    { name: "Maria", email: "maria@example.com" },
  ];

  return <DataTable columns={columns} data={data} />;
}
```

## 🔧 Configuração Avançada

### Customizar Caminhos

Edite o arquivo `components.json`:

```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Desenvolvimento Local

```bash
# Usar repositório local
export FLOWTOMIC_REPO_PATH=/caminho/para/flowtomic
npx flowtomic@latest add button
```

## 🎯 Boas Práticas

- [ ] **SEMPRE inicialize** o projeto com `init` antes de adicionar componentes
- [ ] **SEMPRE adicione** componentes conforme necessário, não todos de uma vez
- [ ] **SEMPRE customize** componentes após a instalação para atender suas necessidades
- [ ] **SEMPRE mantenha** componentes atualizados verificando atualizações no repositório
- [ ] **SEMPRE verifique** dependências necessárias antes de usar componentes

## 🔧 Troubleshooting

### Problemas Comuns

- **Componente não encontrado**

  - **Solução**: **SEMPRE verifique** componentes disponíveis com `npx flowtomic@latest list`

- **Imports incorretos**

  - **Solução**: **SEMPRE verifique** o arquivo `components.json` e os aliases configurados no seu projeto

- **Dependências faltando**

  - **Solução**: **SEMPRE instale** dependências necessárias manualmente ou configure o CLI para instalar automaticamente

- **Erro ao inicializar**
  - **Solução**: **SEMPRE verifique** se está na raiz do projeto e tem permissões de escrita

### Soluções Detalhadas

#### Problema: Componente não encontrado

```bash
# SEMPRE verifique componentes disponíveis
npx flowtomic@latest list
```

#### Problema: Imports incorretos

- [ ] **SEMPRE verifique** arquivo `components.json`
- [ ] **SEMPRE confirme** que aliases estão corretos no `tsconfig.json` ou `jsconfig.json`
- [ ] **SEMPRE valide** que caminhos de instalação estão corretos

#### Problema: Dependências faltando

- [ ] **SEMPRE instale** dependências necessárias manualmente
- [ ] **SEMPRE verifique** `package.json` do componente para dependências
- [ ] **SEMPRE consulte** documentação do componente para requisitos

## 📅 Atualizações

- **Última atualização**: 2025-11-09
- **Versão do guia**: 1.1.0
- **Próxima revisão**: 2025-12-09
