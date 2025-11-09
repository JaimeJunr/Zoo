/**
 * Utilitários para resolver o caminho do repositório Zoo
 */

import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Resolve o caminho do repositório Zoo
 * 
 * Tenta encontrar o repositório de várias formas:
 * 1. Via variável de ambiente ZOO_REPO_PATH
 * 2. Via caminho relativo do CLI (se executado do repositório)
 * 3. Via GitHub (clonando temporariamente)
 */
export function resolveZooRepo(): string | null {
  // 1. Tentar via variável de ambiente
  if (process.env.ZOO_REPO_PATH) {
    const repoPath = process.env.ZOO_REPO_PATH
    if (existsSync(join(repoPath, 'packages', 'ui'))) {
      return repoPath
    }
  }

  // 2. Tentar encontrar relativo ao CLI (se executado do repositório)
  try {
    // Quando executado via bunx/npx, o CLI está em node_modules ou cache
    // Tentar encontrar o repositório a partir do diretório atual
    let currentDir = process.cwd()
    
    // Subir até encontrar o diretório zoo
    for (let i = 0; i < 10; i++) {
      if (existsSync(join(currentDir, 'packages', 'ui'))) {
        return currentDir
      }
      const parent = dirname(currentDir)
      if (parent === currentDir) break
      currentDir = parent
    }
    
    // Tentar a partir do diretório do executável
    if (process.argv[1]) {
      currentDir = dirname(process.argv[1])
      for (let i = 0; i < 10; i++) {
        if (existsSync(join(currentDir, 'packages', 'ui'))) {
          return currentDir
        }
        const parent = dirname(currentDir)
        if (parent === currentDir) break
        currentDir = parent
      }
    }
  } catch (error) {
    // Ignorar erros
  }

  // 3. Tentar via caminho padrão (desenvolvimento local)
  const defaultPaths = [
    join(process.cwd(), '..', '..'), // Se executado de dentro do zoo
    join(process.env.HOME || '', 'Amanhecer', 'zoo'),
    '/home/jaime/Amanhecer/zoo',
  ]

  for (const path of defaultPaths) {
    if (existsSync(join(path, 'packages', 'ui'))) {
      return path
    }
  }

  return null
}

/**
 * Resolve o caminho do componente no repositório
 */
export function resolveComponentPath(componentPath: string, repoPath: string | null): string | null {
  if (!repoPath) {
    repoPath = resolveZooRepo()
    if (!repoPath) return null
  }

  const fullPath = join(repoPath, componentPath)
  return existsSync(fullPath) ? fullPath : null
}

