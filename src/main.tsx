import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'

import * as amplitude from '@amplitude/analytics-browser'

import { ThemeProvider } from '@/providers/theme-provider.tsx'
import Router from '@/Router.tsx'

const isProduction = import.meta.env.PROD

// Initialize Amplitude with your API key
amplitude.init('9a89334a73e90cda4b933f725f6ba6bf', {
  autocapture: isProduction,
})

const root = document.getElementById('root') as HTMLElement

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system">
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}
