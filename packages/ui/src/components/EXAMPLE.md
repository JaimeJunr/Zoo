# Estrutura de Componente UI

Cada componente deve seguir esta estrutura:

```
button/
├── button.tsx          # Componente principal
├── button.stories.tsx  # Storybook stories (opcional)
├── button.test.tsx     # Testes (opcional)
├── index.ts            # Barrel export
└── README.md           # Documentação (opcional)
```

## Exemplo: Button

```tsx
// button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// index.ts
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'
```

