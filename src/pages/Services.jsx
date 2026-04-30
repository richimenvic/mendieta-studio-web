import { Link } from 'react-router-dom'

const serviceItems = [
  {
    title: 'Anteproyecto',
    description:
      'Primeras ideas, distribución, imagen general y estudio inicial del proyecto.'
  },
  {
    title: 'Proyecto básico',
    description:
      'Documentación necesaria para definir el proyecto y avanzar con trámites o consultas.'
  },
  {
    title: 'Proyecto de ejecución',
    description:
      'Planos, detalles y documentos técnicos para construir con más claridad.'
  },
  {
    title: 'Licencias y documentación',
    description:
      'Preparación de planos, memorias y documentación técnica para cada gestión.'
  },
  {
    title: 'Coordinación BIM',
    description:
      'Uso de modelos digitales para ordenar información y revisar mejor el proyecto.'
  },
  {
    title: 'Apoyo técnico',
    description:
      'Ayuda a clientes, promotores y otros equipos en revisión o desarrollo de proyectos.'
  }
]

const processSteps = [
  ['01', 'Escuchar', 'Entender qué necesita el cliente.'],
  ['02', 'Ordenar', 'Definir el alcance y los pasos del trabajo.'],
  ['03', 'Dibujar', 'Preparar planos y documentación clara.'],
  ['04', 'Acompañar', 'Resolver dudas durante el proceso.'],
]

export default function Services() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h1>Servicios de arquitectura</h1>
          <p className="lead">
            Ayudamos a desarrollar proyectos de forma clara, ordenada y técnicamente segura.
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
            <p className="section-copy">Un proceso simple para trabajar con orden desde el inicio.</p>
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
            <h2>¿Quiere estudiar un proyecto?</h2>
            <p className="section-copy">Podemos revisar la idea y preparar una propuesta de trabajo.</p>
          </div>
          <Link className="cta-link" to="/contacto">Solicitar consulta</Link>
        </div>
      </section>
    </>
  )
}
