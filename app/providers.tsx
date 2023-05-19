'use client'

import { ThemeProvider as Theme } from 'styled-components'
import { ReactNode } from 'react'
import { theme } from '../components/Theme/theme'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return <Theme theme={theme}>{children}</Theme>
}
