import { ThemeProvider } from '@/providers/theme-provider.tsx'
import { StrictMode } from 'react'

import './index.css'

import { createRoot } from 'react-dom/client'

import App from './App.tsx'

const root = document.getElementById('root') as HTMLElement

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ThemeProvider defaultTheme="system">
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}
