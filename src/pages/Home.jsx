import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import '../services.css'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

const serviceHighlights = [
  'Arquitectura residencial',
  'Reformas y rehabilitaciones',
  'Licencias y cambios de uso',
  'Documentación técnica y BIM'
]

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Mendieta Studio</div>
            <h1 className="home-hero-title">La belleza de un espacio empieza cuando se habita.</h1>
            <p className="lead">Arquitectura, reformas, licencias y documentación técnica desde Pozoblanco, Córdoba.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
              <Link className="cta-link cta-link--ghost" to="/proyectos">Ver proyectos</Link>
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
            <p className="section-copy">Una selección de trabajos realizados.</p>
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
        <div className="wrap home-about-grid">
          <div>
            <div className="kicker home-kicker">Servicios</div>
            <h2>Diseño, técnica y gestión para desarrollar cada encargo con claridad.</h2>
          </div>
          <div>
            <div className="home-services-minimal" role="list">
              {serviceHighlights.map((service) => (
                <div className="home-service-line" key={service} role="listitem">{service}</div>
              ))}
            </div>
            <Link className="cta-link" to="/servicios">Ver servicios</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap home-about-grid">
          <div>
            <div className="kicker home-kicker">Estudio</div>
            <h2>Arquitectura con criterio, oficio y atención al detalle.</h2>
          </div>
          <div>
            <p className="section-copy">Estudio de arquitectura en Pozoblanco, Córdoba, con experiencia en proyectos locales e internacionales.</p>
            <Link className="cta-link" to="/estudio">Conocer el estudio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="home-cta-section">
            <div>
              <div className="kicker home-kicker">Contacto</div>
              <h2>¿Tiene un proyecto en mente?</h2>
              <p className="section-copy home-contact-copy">Cuéntenos la idea y estudiamos cómo ayudarle.</p>
            </div>
            <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
