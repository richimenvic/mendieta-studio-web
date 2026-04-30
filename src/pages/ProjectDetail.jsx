import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import './ProjectDetailSlider.css'

function ProjectImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  useEffect(() => {
    setCurrentIndex(0)
  }, [images])

  if (!images?.length) return null

  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  const goToNext = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  const handleTouchEnd = (event) => {
    if (touchStart === null || !hasMultipleImages) return

    const touchEnd = event.changedTouches[0].clientX
    const distance = touchStart - touchEnd
    const minSwipeDistance = 48

    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? goToNext() : goToPrevious()
    }

    setTouchStart(null)
  }

  return (
    <section className="project-slider section-min" aria-label={`Galería del proyecto ${title}`}>
      <div
        className="project-slider-frame"
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="media-img project-slider-img"
          src={images[currentIndex]}
          alt={`Galería ${currentIndex + 1} del proyecto ${title}`}
          loading="lazy"
        />

        {hasMultipleImages && (
          <>
            <button
              className="project-slider-arrow project-slider-arrow--prev"
              type="button"
              onClick={goToPrevious}
              aria-label="Ver imagen anterior"
            >
              ‹
            </button>
            <button
              className="project-slider-arrow project-slider-arrow--next"
              type="button"
              onClick={goToNext}
              aria-label="Ver imagen siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <>
          <div className="project-slider-footer" aria-label="Selector de imágenes">
            <span className="project-slider-counter">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <div className="project-slider-thumbnails" aria-label="Miniaturas de la galería">
            {images.map((imageSrc, index) => (
              <button
                className={`project-slider-thumbnail${index === currentIndex ? ' is-active' : ''}`}
                key={`${imageSrc}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                <img src={imageSrc} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <main className="page-hero"><div className="wrap"><h1>Proyecto no encontrado</h1></div></main>

  const sliderImages = [project.detailImage, ...(project.galleryImages || [])].filter(Boolean)

  return (
    <main className="page-hero">
      <div className="wrap">
        <div className="kicker">Proyecto</div>
        <h1>{project.title}</h1>
        <ProjectImageSlider images={sliderImages} title={project.title} />
        <p>{project.description}</p>
        <dl className="project-facts">
          {Object.entries({ Ubicación: project.location, Año: project.year, Estado: project.status, 'Fase actual': project.phase, Cliente: project.client, 'Proyecto para': project.projectFor, Rol: project.role, Tipología: project.type }).map(([k, v]) => v && <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        {project.legalNote && <p className="legal-note">{project.legalNote}</p>}
      </div>
    </main>
  )
}
