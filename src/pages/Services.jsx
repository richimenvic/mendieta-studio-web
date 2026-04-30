import { Link } from 'react-router-dom'

const serviceItems = [
  {
    title: 'Anteproyecto y viabilidad',
    description:
      'Estudio inicial del encargo, criterios de implantación, organización funcional, imagen arquitectónica y primeras decisiones de alcance.'
  },
  {
    title: 'Proyecto básico',
    description:
      'Definición arquitectónica y documentación necesaria para iniciar trámites, consultas técnicas o procesos de licencia.'
  },
  {
    title: 'Proyecto de ejecución',
    description:
      'Desarrollo constructivo, coordinación documental, detalles técnicos y preparación de información clara para obra.'
  },
  {
    title: 'Documentación técnica',
    description:
      'Planos, memorias, mediciones, revisiones y documentación gráfica orientada a una lectura precisa del proyecto.'
  },
  {
    title: 'Coordinación BIM',
    description:
      'Modelado, revisión de interferencias, coordinación interdisciplinar y control digital del desarrollo técnico.'
  },
  {
    title: 'Consultoría y apoyo externo',
    description:
      'Soporte a estudios, promotores o equipos técnicos que necesitan revisión, producción documental o criterio arquitectónico.'
  }
]

const processSteps = [
  ['01', 'Escuchar', 'Comprender objetivos, condicionantes, presupuesto, plazos y nivel de definición necesario.'],
  ['02', 'Ordenar', 'Convertir la idea en una estrategia arquitectónica clara y en un alcance de trabajo realista.'],
  ['03', 'Desarrollar', 'Producir documentación coordinada, útil para decidir, tramitar, construir o licitar.'],
  ['04', 'Acompañar', 'Resolver ajustes técnicos y mantener la coherencia del proyecto durante su evolución.'],
]

export default function Services() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h1>Servicios de arquitectura y documentación técnica</h1>
          <p className="lead">
            Acompañamos proyectos residenciales, institucionales y de equipamiento desde la idea inicial hasta una documentación clara, coordinada y viable.
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
            <p className="section-copy">Un método sencillo: entender bien el encargo, ordenar las decisiones y producir documentación útil para avanzar con seguridad.</p>
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
            <h2>¿Necesita valorar un proyecto?</h2>
            <p className="section-copy">Podemos revisar el alcance, aclarar fases y preparar una propuesta profesional ajustada al tipo de encargo.</p>
          </div>
          <Link className="cta-link" to="/contacto">Solicitar consulta</Link>
        </div>
      </section>
    </>
  )
}
