import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import '../services.css'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

const serviceHighlights = [
  {
    title: 'Arquitectura residencial',
    description: 'Proyectos de vivienda nueva, reforma e intervención integral desde una visión clara, funcional y duradera.'
  },
  {
    title: 'Reformas y rehabilitaciones',
    description: 'Transformamos espacios existentes respetando su carácter y adaptándolos a nuevas formas de uso.'
  },
  {
    title: 'Licencias de obra y actividad',
    description: 'Documentación técnica para obras, aperturas, locales comerciales, oficinas y actividades profesionales.'
  },
  {
    title: 'Cambios de uso',
    description: 'Estudio de viabilidad técnica y normativa para transformar locales u otros espacios en vivienda.'
  },
  {
    title: 'Interiorismo y adecuación de espacios',
    description: 'Soluciones interiores coherentes con la arquitectura, el uso previsto y la experiencia del espacio.'
  },
  {
    title: 'Documentación técnica y BIM',
    description: 'Planos, modelos digitales, mediciones y documentación coordinada para ordenar el proyecto.'
  }
]

const homeWorkSteps = [
  {
    title: 'Primera consulta',
    text: 'Escuchamos la necesidad del cliente, revisamos el punto de partida y orientamos los primeros pasos.'
  },
  {
    title: 'Estudio de viabilidad',
    text: 'Analizamos condiciones del inmueble, normativa aplicable y posibilidades reales antes de avanzar.'
  },
  {
    title: 'Propuesta y proyecto técnico',
    text: 'Desarrollamos una solución clara y documentada, ajustada al uso, al presupuesto y a la normativa.'
  },
  {
    title: 'Tramitación y documentación',
    text: 'Preparamos y ordenamos la documentación necesaria para su presentación ante el organismo competente.'
  },
  {
    title: 'Obra y seguimiento',
    text: 'Cuando el encargo lo requiere, acompañamos la fase de obra para mantener la coherencia del proyecto.'
  }
]

function HomeAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="studio-accordion home-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const label = `${index + 1}. ${item.title}`

        return (
          <article className={`studio-accordion-item${isOpen ? ' is-open' : ''}`} key={label}>
            <button className="studio-accordion-trigger" type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span className="studio-accordion-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              <span>{label}</span>
            </button>
            {isOpen && <div className="studio-accordion-panel"><p>{item.text}</p></div>}
          </article>
        )
      })}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Arquitecto en Pozoblanco, Córdoba</div>
            <h1 className="home-hero-title">Estudio de arquitectura en Pozoblanco.</h1>
            <p className="lead">Diseño, documentación y proyectos técnicos.</p>
            <p className="lead home-small-copy">Mendieta Studio — Ricardo Javier Mendieta Cárdenas, arquitecto colegiado nº 909.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
              <Link className="cta-link cta-link--ghost" to="/proyectos">Ver trabajos</Link>
            </div>
            <div className="hero-meta-line home-trust-line" aria-label="Ámbitos de trabajo">
              <span>Vivienda</span>
              <span>Reformas</span>
              <span>Licencias</span>
              <span>Cambios de uso</span>
            </div>
          </div>
          <figure className="hero-image hero-image-photo">
            <img className="media-img" src="/img/projects/prodimsa-lateral-hero.webp" alt="Vista exterior del Centro Social Corporativo PRODIMSA, proyecto de Mendieta Studio" loading="eager" />
          </figure>
        </div>
      </section>

      <section className="section section-featured">
        <div className="wrap">
          <div className="section-head home-section-head">
            <div className="kicker home-kicker">Proyectos</div>
            <p className="section-copy">Algunos trabajos realizados.</p>
          </div>
          <div className="home-project-grid">
            {homeFeaturedProjects.map((project) => (
              <article className="home-project-card" key={project.slug}>
                <Link to={`/proyectos/${project.slug}`} className="home-project-image" aria-label={`Ver proyecto completo ${project.title}`}>
                  <span className="home-project-photo-badge" aria-hidden="true">+ fotos</span>
                  {project.cardImage
                    ? <img className="media-img home-project-media-img" src={project.cardImage} alt={`Imagen del proyecto ${project.title}`} loading="lazy" />
                    : <span className="home-project-fallback media-avicola" aria-hidden="true" />}
                </Link>
                <div className="home-project-content">
                  <h3><Link to={`/proyectos/${project.slug}`}>{project.title}</Link></h3>
                  <p>{[project.type || project.category, project.location || 'Córdoba, España', project.year].filter(Boolean).join(' / ')}</p>
                  <Link className="text-link home-project-detail-link" to={`/proyectos/${project.slug}`}>Ver proyecto completo</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="home-more-link">
            <Link className="text-link" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </div>
      </section>

      <section className="section home-services-section">
        <div className="wrap">
          <div className="section-head home-section-head">
            <div className="kicker home-kicker">Servicios</div>
            <p className="section-copy">Arquitectura, reformas, licencias y documentación técnica con una metodología clara.</p>
          </div>
          <div className="services-editorial-list home-services-editorial" role="list">
            {serviceHighlights.map((service) => (
              <article className="service-editorial-item" key={service.title} role="listitem">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="home-more-link">
            <Link className="text-link" to="/servicios">Ver servicios</Link>
          </div>
        </div>
      </section>

      <section className="section home-process-section">
        <div className="wrap">
          <div className="services-section-title home-process-title">
            <h2>Cómo trabajamos</h2>
            <p>Nuestra metodología de trabajo explicada paso a paso.</p>
          </div>
          <HomeAccordion items={homeWorkSteps} />
        </div>
      </section>

      <section className="section">
        <div className="wrap home-about-grid">
          <div>
            <div className="kicker home-kicker">Estudio</div>
            <h2>Arquitectura clara y cercana.</h2>
          </div>
          <div>
            <p className="section-copy">Estudio de arquitectura en Pozoblanco, Córdoba.</p>
            <p className="section-copy home-small-copy">Atendemos a particulares, promotores y equipos profesionales.</p>
            <Link className="cta-link" to="/estudio">Conocer el estudio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="home-cta-section">
            <div>
              <div className="kicker home-kicker">Contacto</div>
              <h2>¿Necesita un arquitecto?</h2>
              <p className="section-copy home-contact-copy">Cuéntenos qué necesita y le orientamos.</p>
            </div>
            <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
