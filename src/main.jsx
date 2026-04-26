import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const basePath = import.meta.env.BASE_URL || '/'
const params = new URLSearchParams(window.location.search)
const redirectedPath = params.get('p')
if (redirectedPath) {
  const normalizedPath = redirectedPath.startsWith(basePath) || basePath === '/'
    ? redirectedPath
    : `${basePath.replace(/\/$/, '')}${redirectedPath}`
  window.history.replaceState(null, '', normalizedPath)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el contenedor raíz #root para montar React.')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
