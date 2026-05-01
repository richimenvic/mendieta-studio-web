import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

const serviceHighlights = [
  ['Viviendas', 'Proyecto y documentación para vivienda nueva o reformas.'],
  ['Reformas', 'Planos, criterios técnicos y apoyo para definir la obra.'],
  ['Licencias', 'Documentación técnica para trámites y permisos.'],
  ['Proyectos técnicos', 'Planos, memorias y coordinación para avanzar con seguridad.'],
]

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
              <span>Documentación técnica</span>
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

      <section className="section">
        <div className="wrap">
          <div className="section-head home-section-head">
            <div className="kicker home-kicker">Servicios</div>
            <p className="section-copy">Lo que puede necesitar un cliente antes de una obra o trámite.</p>
          </div>
          <div className="home-services-grid home-services-grid--wide">
            {serviceHighlights.map(([title, description]) => (
              <article className="box home-service-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="home-more-link">
            <Link className="text-link" to="/servicios">Ver servicios</Link>
          </div>
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
