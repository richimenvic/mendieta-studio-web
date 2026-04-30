import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

const serviceHighlights = [
  ['Anteproyecto', 'Primeras ideas, distribución y estudio inicial del proyecto.'],
  ['Proyecto básico y ejecución', 'Planos y documentos para licencia, obra y construcción.'],
  ['Coordinación BIM', 'Modelos digitales para ordenar el proyecto y evitar errores.'],
  ['Consultoría técnica', 'Apoyo técnico para clientes, promotores y otros equipos.'],
]

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Arquitecto en Córdoba / Pozoblanco</div>
            <h1 className="home-hero-title">Arquitectura clara, técnica y bien documentada.</h1>
            <p className="lead">Mendieta Studio desarrolla proyectos de arquitectura para viviendas, reformas, equipamientos y encargos profesionales.</p>
            <p className="lead home-small-copy">Ricardo Javier Mendieta Cárdenas · Arquitecto colegiado nº 909 · Colegio Oficial de Arquitectos de Córdoba.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/proyectos">Ver proyectos</Link>
              <Link className="cta-link cta-link--ghost" to="/contacto">Contactar</Link>
            </div>
            <div className="hero-meta-line home-trust-line" aria-label="Ámbitos de trabajo">
              <span>Vivienda</span>
              <span>Reformas</span>
              <span>Proyecto técnico</span>
              <span>BIM</span>
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
            <p className="section-copy">Algunos trabajos realizados por el estudio.</p>
          </div>
          <div className="home-project-grid">
            {homeFeaturedProjects.map((project) => (
              <article className="home-project-card" key={project.slug}>
                <Link to={`/proyectos/${project.slug}`} className="home-project-image" aria-label={`Ver proyecto ${project.title}`}>
                  {project.cardImage
                    ? <img className="media-img home-project-media-img" src={project.cardImage} alt={`Imagen del proyecto ${project.title}`} loading="lazy" />
                    : <span className="home-project-fallback media-avicola" aria-hidden="true" />}
                </Link>
                <div className="home-project-content">
                  <h3>{project.title}</h3>
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

      <section className="section">
        <div className="wrap">
          <div className="section-head home-section-head">
            <div className="kicker home-kicker">Servicios</div>
            <p className="section-copy">Servicios de arquitectura para avanzar con orden, claridad y seguridad técnica.</p>
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
            <h2>Arquitectura cercana, seria y bien resuelta.</h2>
          </div>
          <div>
            <p className="section-copy">Trabajamos desde Córdoba y Pozoblanco para clientes particulares, promotores y equipos profesionales.</p>
            <p className="section-copy home-small-copy">El objetivo es simple: que cada proyecto esté bien pensado, bien explicado y bien preparado.</p>
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
              <p className="section-copy home-contact-copy">Podemos revisar su idea, resolver dudas iniciales y preparar una propuesta profesional.</p>
            </div>
            <Link className="cta-link" to="/contacto">Solicitar consulta</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
