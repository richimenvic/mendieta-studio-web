import { Link } from 'react-router-dom'

const serviceItems = [
  {
    title: 'Viviendas',
    description:
      'Proyecto y documentación para vivienda nueva o reformas.'
  },
  {
    title: 'Reformas',
    description:
      'Planos, ideas claras y apoyo técnico para definir la obra.'
  },
  {
    title: 'Licencias',
    description:
      'Documentación técnica para permisos y trámites.'
  },
  {
    title: 'Proyectos técnicos',
    description:
      'Planos, memorias y documentos para avanzar con seguridad.'
  },
  {
    title: 'BIM y coordinación',
    description:
      'Modelos digitales para ordenar información y revisar el proyecto.'
  },
  {
    title: 'Apoyo profesional',
    description:
      'Ayuda técnica para clientes, promotores y otros equipos.'
  }
]

const processSteps = [
  ['01', 'Cuéntenos', 'Explique qué necesita.'],
  ['02', 'Revisamos', 'Valoramos el alcance del trabajo.'],
  ['03', 'Proponemos', 'Preparamos una propuesta clara.'],
  ['04', 'Desarrollamos', 'Hacemos planos y documentación.'],
]

export default function Services() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h1>Servicios de arquitectura</h1>
          <p className="lead">
            Viviendas, reformas, licencias, proyectos técnicos y documentación.
          </p>
        </div>
      </main>

      <section className="section section-compact">
        <div className="wrap">
          <div className="services-grid services-grid--expanded" role="list">
            {serviceItems.map((service) => (
              <article className="box service-box" key={service.title} role="listitem">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="wrap">
          <div className="section-head home-section-head">
            <div className="kicker">Proceso</div>
            <p className="section-copy">Un proceso simple, sin complicaciones.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article className="box process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="wrap home-cta-section">
          <div>
            <div className="kicker">Nuevo encargo</div>
            <h2>¿Quiere consultar un proyecto?</h2>
            <p className="section-copy">Cuéntenos la idea y le orientamos.</p>
          </div>
          <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
        </div>
      </section>
    </>
  )
}
