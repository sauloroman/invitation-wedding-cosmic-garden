import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JardinCosmicoApp } from './JardinCosmicoApp'
import './styles/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JardinCosmicoApp />
  </StrictMode>,
)
