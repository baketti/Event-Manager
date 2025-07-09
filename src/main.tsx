import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppSpa from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSpa />
  </StrictMode>,
)
