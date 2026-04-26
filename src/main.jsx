import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const params = new URLSearchParams(window.location.search)
const redirectedPath = params.get('p')
if (redirectedPath) {
  window.history.replaceState(null, '', redirectedPath)
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
