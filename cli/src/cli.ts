#!/usr/bin/env bun

/**
 * @zoo/cli
 * 
 * CLI para instalação de componentes e hooks do Zoo
 * 
 * Uso:
 *   bunx github:seu-usuario/zoo/cli init
 *   bunx github:seu-usuario/zoo/cli add button
 *   bunx github:seu-usuario/zoo/cli list
 */

import { Command } from 'commander'
import { init } from './commands/init'
import { add } from './commands/add'
import { list } from './commands/list'

const program = new Command()

program
  .name('zoo')
  .description('CLI para instalação de componentes e hooks do Zoo')
  .version('0.1.0')

program
  .command('init')
  .description('Inicializar configuração do Zoo no projeto')
  .action(init)

program
  .command('add')
  .description('Adicionar componente ou hook ao projeto')
  .argument('[components...]', 'Componentes ou hooks para adicionar (opcional, mostra lista interativa)')
  .action(add)

program
  .command('list')
  .description('Listar todos os componentes e hooks disponíveis')
  .action(list)

program.parse()

