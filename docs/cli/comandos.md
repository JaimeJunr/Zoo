# 📋 Comandos do CLI Flowtomic

> **Objetivo**: Referência completa dos comandos disponíveis no CLI do Flowtomic, incluindo parâmetros, opções e exemplos de uso.

## 🚀 Comandos Disponíveis

### `init`

Inicializa a configuração do Flowtomic no projeto, criando o arquivo `components.json`.

```bash
npx flowtomic@latest init
# ou
bunx flowtomic@latest init
```

**O que faz**:

- Cria o arquivo `components.json` na raiz do projeto
- Configura os aliases e caminhos padrão
- Permite customização dos caminhos de instalação

### `add`

Adiciona componentes ou hooks ao projeto. Os arquivos são copiados diretamente para o seu projeto, permitindo customização total (similar ao shadcn/ui).

```bash
# Adicionar um componente específico
npx flowtomic@latest add button

# Adicionar múltiplos componentes
npx flowtomic@latest add button card input

# Adicionar hooks
npx flowtomic@latest add use-stat-card

# Modo interativo (sem especificar componentes)
npx flowtomic@latest add
```

**O que faz**:

- Copia os arquivos do componente para `components/ui/` (ou caminho configurado)
- Ajusta os imports para usar os aliases do seu projeto
- Instala dependências necessárias (se configurado)

### `add-block`

Adiciona um block completo ao projeto.

```bash
# Adicionar um block específico
npx flowtomic@latest add-block dashboard-01
```

**O que faz**:

- Copia todos os arquivos do block
- Instala dependências necessárias
- Ajusta imports e caminhos

### `list`

Lista todos os componentes, hooks e blocks disponíveis.

```bash
npx flowtomic@latest list
```

**Saída**:

- Lista de atoms (13)
- Lista de molecules (10)
- Lista de organisms (5)
- Lista de hooks (1)
- Lista de blocks (1)

## 🔧 Opções e Flags

### Variáveis de Ambiente

- **`FLOWTOMIC_REPO_PATH`**: Caminho local para o repositório (para desenvolvimento)
- **`FLOWTOMIC_REPO_URL`**: URL do repositório GitHub (padrão: `JaimeJunr/Flowtomic`)

**SEMPRE configure** essas variáveis quando trabalhar com desenvolvimento local.

## 📖 Exemplos Práticos

### Inicializar Projeto

```bash
# 1. Inicializar configuração
npx flowtomic@latest init

# 2. Adicionar componentes básicos
npx flowtomic@latest add button card input

# 3. Adicionar um block completo
npx flowtomic@latest add-block dashboard-01
```

### Desenvolvimento Local

```bash
# Usar repositório local
export FLOWTOMIC_REPO_PATH=/caminho/para/flowtomic
npx flowtomic@latest add button
```

## 🎯 Compatibilidade com shadcn CLI

O Flowtomic é compatível com o shadcn CLI:

```bash
# Usar registry do Flowtomic com shadcn CLI
npx shadcn@latest add https://registry.flowtomic.dev/all.json
```

## 🔧 Troubleshooting

### Problemas Comuns

- **Erro: "components.json não encontrado"**

  - **Solução**: **SEMPRE execute** `npx flowtomic init` primeiro

- **Erro: "Não foi possível encontrar o repositório"**

  - **Solução**: **SEMPRE defina** `FLOWTOMIC_REPO_PATH` ou use caminho local

- **Erro: "Componente não encontrado"**
  - **Solução**: **SEMPRE verifique** a lista com `npx flowtomic list`

### Soluções

- [ ] **SEMPRE execute** `init` antes de usar outros comandos
- [ ] **SEMPRE verifique** variáveis de ambiente quando necessário
- [ ] **SEMPRE confirme** que componentes existem antes de adicionar

## 📅 Atualizações

- **Última atualização**: 2025-11-09
- **Versão da documentação**: 1.1.0
- **Próxima revisão**: 2025-12-09
