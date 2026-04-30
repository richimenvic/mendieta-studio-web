import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Studio from './pages/Studio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import { siteUrl, updateSeo } from './seo'

const seoByPath = {
  '/': ['Mendieta Studio | Arquitecto en Córdoba y Pozoblanco', 'Mendieta Studio, estudio de arquitectura en Córdoba y Pozoblanco. Arquitecto colegiado nº 909 en el Colegio Oficial de Arquitectos de Córdoba.'],
  '/proyectos': ['Proyectos de Arquitectura | Mendieta Studio', 'Proyectos de arquitectura, vivienda, equipamiento y documentación técnica realizados por Mendieta Studio.'],
  '/estudio': ['Estudio de Arquitectura en Córdoba | Mendieta Studio', 'Mendieta Studio es un estudio de arquitectura en Córdoba y Pozoblanco, dirigido por Ricardo Javier Mendieta Cárdenas, arquitecto colegiado nº 909.'],
  '/servicios': ['Servicios de Arquitectura | Mendieta Studio', 'Servicios de arquitectura: anteproyecto, proyecto básico, proyecto de ejecución, licencias, documentación técnica, BIM y apoyo profesional.'],
  '/contacto': ['Contacto | Mendieta Studio', 'Contacto de Mendieta Studio para consultas sobre arquitectura, reformas, licencias, documentación técnica y nuevos proyectos.'],
  '/aviso-legal': ['Aviso Legal | Mendieta Studio', 'Aviso legal de Mendieta Studio con información del titular, condiciones de uso, propiedad intelectual y jurisdicción aplicable.'],
  '/politica-privacidad': ['Política de Privacidad | Mendieta Studio', 'Política de privacidad de Mendieta Studio conforme RGPD y LOPDGDD: finalidad, bases legales, conservación y derechos del usuario.'],
  '/politica-cookies': ['Política de Cookies | Mendieta Studio', 'Información sobre el uso de cookies en mendietastudio.com, finalidades, base legal y gestión de preferencias del usuario.'],
}

function SeoSync() {
  const location = useLocation()
  useEffect(() => {
    const key = Object.keys(seoByPath).find((path) => location.pathname === path) || '/'
    const [title, description] = seoByPath[key]
    updateSeo({ title, description, canonical: `${siteUrl}${location.pathname}` })
  }, [location.pathname])
  return null
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <SeoSync />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/projects.html" element={<Navigate to="/proyectos" replace />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="/project-templo-la-paz.html" element={<Navigate to="/proyectos/templo-la-paz" replace />} />
        <Route path="/project-templo-santa-cruz.html" element={<Navigate to="/proyectos/templo-santa-cruz" replace />} />
        <Route path="/project-prodimsa.html" element={<Navigate to="/proyectos/centro-social-corporativo-prodimsa" replace />} />
        <Route path="/estudio" element={<Studio />} />
        <Route path="/studio.html" element={<Navigate to="/estudio" replace />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/services.html" element={<Navigate to="/servicios" replace />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/contact.html" element={<Navigate to="/contacto" replace />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/aviso-legal.html" element={<Navigate to="/aviso-legal" replace />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-privacidad.html" element={<Navigate to="/politica-privacidad" replace />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
        <Route path="/politica-cookies.html" element={<Navigate to="/politica-cookies" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
