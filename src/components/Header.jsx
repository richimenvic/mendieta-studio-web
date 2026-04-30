import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('mendieta-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('mendieta-theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const label = theme === 'dark' ? 'Claro' : 'Oscuro'

  return (
    <header className="header">
      <div className="wrap nav">
        <NavLink to="/" className="brand"><strong>mendieta</strong><span>studio</span></NavLink>
        <div className="nav-actions">
          <nav className="nav-links">
            {links.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Cambiar a modo ${label.toLowerCase()}`}
          >
            {label}
          </button>
        </div>
      </div>
    </header>
  )
}
