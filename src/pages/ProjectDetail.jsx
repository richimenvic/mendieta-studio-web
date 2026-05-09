import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import './ProjectDetailSlider.css'

function ProjectImageGallery({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    setCurrentIndex(0)
    setLightboxOpen(false)
  }, [images])

  const hasMultipleImages = images?.length > 1

  const goToPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  const goToNext = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  useEffect(() => {
    if (!lightboxOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxOpen(false)
      if (event.key === 'ArrowLeft' && hasMultipleImages) goToPrevious()
      if (event.key === 'ArrowRight' && hasMultipleImages) goToNext()
    }

    document.body.classList.add('has-project-lightbox')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('has-project-lightbox')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen, hasMultipleImages])

  if (!images?.length) return null

  return (
    <section className="project-detail-gallery" aria-label={`Galería del proyecto ${title}`}>
      {images.map((imageSrc, index) => (
        <button
          className={`project-detail-gallery-item${index === 0 ? ' is-large' : ''}`}
          key={`${imageSrc}-${index}`}
          type="button"
          onClick={() => {
            setCurrentIndex(index)
            setLightboxOpen(true)
          }}
          aria-label={`Ampliar imagen ${index + 1} del proyecto ${title}`}
        >
          <img src={imageSrc} alt={`Imagen ${index + 1} del proyecto ${title}`} loading={index === 0 ? 'eager' : 'lazy'} />
          <span>Ampliar</span>
        </button>
      ))}

      {lightboxOpen && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`Imagen ampliada del proyecto ${title}`}>
          <button className="project-lightbox-backdrop" type="button" onClick={() => setLightboxOpen(false)} aria-label="Cerrar imagen ampliada" />
          <div className="project-lightbox-content">
            <button className="project-lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Cerrar imagen ampliada">Cerrar</button>
            {hasMultipleImages && (
              <button className="project-lightbox-arrow project-lightbox-arrow--prev" type="button" onClick={goToPrevious} aria-label="Ver imagen anterior">‹</button>
            )}
            <img src={images[currentIndex]} alt={`Imagen ampliada ${currentIndex + 1} del proyecto ${title}`} />
            {hasMultipleImages && (
              <button className="project-lightbox-arrow project-lightbox-arrow--next" type="button" onClick={goToNext} aria-label="Ver imagen siguiente">›</button>
            )}
            <span className="project-lightbox-counter">{String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <main className="page-hero"><div className="wrap"><h1>Proyecto no encontrado</h1></div></main>

  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const galleryImages = [project.detailImage, ...(project.galleryImages || [])].filter(Boolean)
  const facts = Object.entries({ Ubicación: project.location, Año: project.year, Estado: project.status, 'Fase actual': project.phase, Cliente: project.client, 'Proyecto para': project.projectFor, Rol: project.role, Tipología: project.type }).filter(([, value]) => value)

  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <ProjectImageGallery images={galleryImages} title={project.title} />

        <aside className="project-detail-info" aria-label="Información del proyecto">
          <div className="project-detail-info-inner">
            <div className="kicker">Proyecto</div>
            <h1>{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>

            <dl className="project-detail-facts">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {project.legalNote && <p className="legal-note project-detail-legal-note">{project.legalNote}</p>}

            <nav className="project-detail-actions" aria-label="Navegación de proyecto">
              <div className="project-detail-arrows" aria-label="Proyecto anterior y siguiente">
                <Link className="project-detail-arrow" to={`/proyectos/${previousProject.slug}`} aria-label={`Proyecto anterior: ${previousProject.title}`}>←</Link>
                <Link className="project-detail-arrow" to={`/proyectos/${nextProject.slug}`} aria-label={`Proyecto siguiente: ${nextProject.title}`}>→</Link>
              </div>
              <Link className="text-link" to="/proyectos">Volver a proyectos</Link>
              <Link className="text-link" to="/contacto">Consultar proyecto</Link>
            </nav>
          </div>
        </aside>
      </div>
    </main>
  )
}
