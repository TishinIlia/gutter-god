import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { ThemeProvider } from '@/providers/theme-provider.tsx'

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
