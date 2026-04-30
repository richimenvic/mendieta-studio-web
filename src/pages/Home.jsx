import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const homeFeaturedProjects = featuredProjects.slice(0, 3)

const serviceHighlights = [
  ['Anteproyectos', 'Primeras ideas, criterios de implantación, distribución y viabilidad arquitectónica.'],
  ['Proyecto básico y ejecución', 'Documentación técnica precisa para licencia, definición constructiva y desarrollo de obra.'],
  ['Coordinación BIM', 'Modelado, revisión y coordinación digital para reducir errores y mejorar el control técnico.'],
  ['Consultoría técnica', 'Revisión documental, apoyo a equipos externos y acompañamiento en decisiones de proyecto.'],
]

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="wrap hero-grid home-hero-grid">
          <div>
            <div className="kicker home-kicker">Mendieta Studio · Arquitectura</div>
            <h1 className="home-hero-title">Arquitectura sobria, técnica y contemporánea.</h1>
            <p className="lead">Desarrollamos proyectos residenciales, institucionales y de equipamiento con criterio de diseño, precisión constructiva y documentación coordinada.</p>
            <div className="home-hero-actions">
              <Link className="cta-link" to="/proyectos">Ver proyectos</Link>
              <Link className="cta-link cta-link--ghost" to="/contacto">Hablar sobre un proyecto</Link>
            </div>
            <div className="hero-meta-line home-trust-line" aria-label="Ámbitos de trabajo">
              <span>Diseño arquitectónico</span>
              <span>Documentación técnica</span>
              <span>Coordinación BIM</span>
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
            <div className="kicker home-kicker">Proyectos destacados</div>
            <p className="section-copy">Una selección breve de trabajos desarrollados con atención al diseño, la documentación y la coordinación técnica.</p>
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
            <p className="section-copy">Acompañamos el proyecto desde las primeras decisiones hasta la documentación técnica necesaria para desarrollarlo con rigor.</p>
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
            <Link className="text-link" to="/servicios">Ver servicios profesionales</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap home-about-grid">
          <div>
            <div className="kicker home-kicker">Sobre el estudio</div>
            <h2>Diseño arquitectónico con control técnico.</h2>
          </div>
          <div>
            <p className="section-copy">Mendieta Studio combina sensibilidad espacial, criterio constructivo y herramientas digitales para producir proyectos claros, coordinados y viables.</p>
            <p className="section-copy home-small-copy">Trabajamos para clientes privados, promotores, instituciones y equipos profesionales que necesitan una arquitectura bien pensada y bien documentada.</p>
            <Link className="cta-link" to="/estudio">Conocer el estudio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="home-cta-section">
            <div>
              <div className="kicker home-kicker">Contacto</div>
              <h2>Cuéntenos qué quiere desarrollar.</h2>
              <p className="section-copy home-contact-copy">Podemos revisar la idea inicial, estudiar la viabilidad del encargo o preparar una propuesta profesional ajustada al alcance del proyecto.</p>
            </div>
            <Link className="cta-link" to="/contacto">Solicitar consulta</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
