import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import * as amplitude from '@amplitude/analytics-browser'

import './index.css'

import { ThemeProvider } from '@/providers/theme-provider.tsx'

import App from './App.tsx'

// Initialize Amplitude with your API key
amplitude.init('9a89334a73e90cda4b933f725f6ba6bf')

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
