'use client'                          // ★クライアントコンポーネントとして明示

import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../theme'

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
