import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
