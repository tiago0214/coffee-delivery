import { ReactNode } from 'react'
import { FooterIcon } from './styles'

interface IconBox {
  children: ReactNode
  variant: VariantOptions
}

type VariantOptions = 'yellow-dark' | 'base-text' | 'yellow' | 'purple'

export function IconBox({ children, variant }: IconBox) {
  return <FooterIcon variant={variant}>{children}</FooterIcon>
}
