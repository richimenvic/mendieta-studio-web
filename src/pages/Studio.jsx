import { Link } from 'react-router-dom'

const studioBlocks = [
  {
    title: 'Qué hacemos',
    text: [
      'Desarrollamos proyectos de arquitectura para viviendas, reformas, equipamientos y encargos profesionales.',
      'Trabajamos con una idea clara: diseño cuidado, documentación ordenada y soluciones viables.'
    ]
  },
  {
    title: 'Experiencia y colaboración',
    text: [
      'Además del trabajo local, el estudio cuenta con experiencia en proyectos internacionales y colaboraciones técnicas de alta exigencia.',
      'Hemos participado como partner de arquitectura y como arquitecto local en proyectos de gran escala, aportando coordinación, criterio técnico y conocimiento del contexto normativo.'
    ]
  },
  {
    title: 'Cómo trabajamos',
    text: [
      'Primero entendemos el encargo y sus necesidades reales.',
      'Después ordenamos el proyecto con planos, criterios técnicos y documentación clara.'
    ]
  },
  {
    title: 'Dónde trabajamos',
    text: [
      'El estudio trabaja desde Córdoba y Pozoblanco.',
      'También colaboramos en proyectos fuera de España cuando el encargo lo requiere.'
    ]
  },
  {
    title: 'Datos profesionales',
    text: [
      'Ricardo Javier Mendieta Cárdenas, arquitecto.',
      'Colegiado nº 909 en el Colegio Oficial de Arquitectos de Córdoba.'
    ]
  }
]

export default function Studio() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap studio-intro">
          <div className="kicker">Estudio</div>
          <h1>Mendieta Studio</h1>
          <p className="lead studio-lead">
            Estudio de arquitectura en Pozoblanco, Córdoba, dirigido por Ricardo Javier Mendieta Cárdenas, arquitecto colegiado nº 909 en el Colegio Oficial de Arquitectos de Córdoba.
          </p>
          <p className="lead studio-lead">
            Combinamos un servicio cercano y técnico con experiencia en proyectos internacionales, colaborando como partner de arquitectura y arquitecto local en encargos de alta exigencia.
          </p>
        </div>
      </main>

      <section className="section section-compact studio-section">
        <div className="wrap studio-editorial">
          {studioBlocks.map((block) => (
            <article key={block.title} className="box studio-block">
              <h2>{block.title}</h2>
              {block.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}

          <article className="box studio-cta">
            <h2>¿Tiene un proyecto en mente?</h2>
            <p>Podemos estudiar su caso y preparar una propuesta.</p>
            <Link className="cta-link" to="/contacto">Contactar</Link>
          </article>
        </div>
      </section>
    </>
  )
}
