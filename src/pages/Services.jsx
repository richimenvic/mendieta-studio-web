import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../services.css'

const serviceItems = [
  {
    title: 'Arquitectura residencial',
    description: 'Desarrollamos proyectos de vivienda nueva, reforma e intervención integral desde una visión clara, funcional y duradera. Cada propuesta busca responder al lugar, al uso y a las personas que lo habitan.'
  },
  {
    title: 'Reformas y rehabilitaciones',
    description: 'Transformamos espacios existentes respetando su carácter y adaptándolos a nuevas formas de uso. Cuidamos el diseño, la técnica, los materiales y los detalles constructivos para lograr intervenciones coherentes y bien resueltas.'
  },
  {
    title: 'Licencias de obra y actividad',
    description: 'Preparamos la documentación técnica necesaria para obras, aperturas, locales comerciales, oficinas y actividades profesionales, facilitando una tramitación clara, ordenada y técnicamente solvente.'
  },
  {
    title: 'Cambios de uso',
    description: 'Estudiamos la viabilidad técnica y normativa para transformar locales u otros espacios en vivienda, analizando las condiciones existentes, la normativa aplicable y las posibilidades reales del inmueble.'
  },
  {
    title: 'Interiorismo y adecuación de espacios',
    description: 'Desarrollamos soluciones interiores coherentes con la arquitectura, el uso previsto, la materialidad y la experiencia cotidiana del espacio.'
  },
  {
    title: 'Documentación técnica y BIM',
    description: 'Elaboramos planos, modelos digitales, mediciones y documentación coordinada para ordenar el proyecto, mejorar la comunicación y facilitar su desarrollo técnico.'
  }
]

const workSteps = [
  { title: 'Primera consulta', text: 'Escuchamos la necesidad del cliente, revisamos el punto de partida y orientamos sobre los primeros pasos del proyecto o trámite.' },
  { title: 'Estudio de viabilidad', text: 'Analizamos las condiciones del inmueble, la normativa aplicable y las posibilidades reales de intervención antes de avanzar con el encargo.' },
  { title: 'Propuesta y proyecto técnico', text: 'Desarrollamos una solución clara y documentada, ajustada al uso, al presupuesto, a la normativa y a las condiciones reales del espacio.' },
  { title: 'Tramitación y documentación', text: 'Preparamos y ordenamos la documentación necesaria para su presentación ante el organismo competente.' },
  { title: 'Obra y seguimiento', text: 'Cuando el encargo lo requiere, acompañamos la fase de obra para ayudar a que la ejecución mantenga coherencia con el proyecto.' }
]

const faqs = [
  { question: '¿Qué tipo de proyecto necesito para una reforma?', answer: 'Depende del alcance de la intervención. Una reforma menor puede requerir documentación sencilla, mientras que una intervención estructural, cambio de distribución importante o afectación de fachada puede exigir un proyecto técnico más completo.' },
  { question: '¿Puedo saber si un local puede convertirse en vivienda antes de comprarlo?', answer: 'Sí. Lo recomendable es realizar un estudio previo de viabilidad para revisar normativa urbanística, condiciones de habitabilidad, iluminación, ventilación, accesos y limitaciones del inmueble antes de tomar una decisión.' },
  { question: '¿Qué documentación suele hacer falta para una licencia de actividad?', answer: 'Normalmente se necesita documentación técnica del local, descripción de la actividad, planos, memoria y justificación del cumplimiento normativo. El contenido exacto depende del tipo de negocio y del municipio.' },
  { question: '¿Cuánto tarda una licencia o un cambio de uso?', answer: 'El plazo depende de la administración, del tipo de trámite y de la complejidad del inmueble. Nuestro trabajo se centra en preparar una documentación clara y completa para reducir incidencias y retrasos innecesarios.' },
  { question: '¿También acompañáis durante la obra?', answer: 'Sí, cuando el encargo lo incluye. El seguimiento de obra ayuda a resolver dudas técnicas, coordinar decisiones y mantener la coherencia entre el proyecto aprobado y la ejecución real.' }
]

function Accordion({ items, numbered = false }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="studio-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const label = numbered ? `${index + 1}. ${item.title}` : item.question

        return (
          <article className={`studio-accordion-item${isOpen ? ' is-open' : ''}`} key={label}>
            <button className="studio-accordion-trigger" type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span className="studio-accordion-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              <span>{label}</span>
            </button>
            {isOpen && <div className="studio-accordion-panel"><p>{item.text || item.answer}</p></div>}
          </article>
        )
      })}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <main className="page-hero services-hero">
        <div className="wrap">
          <div className="kicker">Servicios</div>
          <h1>Servicios de arquitectura</h1>
          <p className="lead">Proyectos de vivienda, reformas, licencias, cambios de uso y documentación técnica en Pozoblanco, Córdoba y otros ámbitos de colaboración.</p>
        </div>
      </main>

      <section className="section section-compact services-editorial-section">
        <div className="wrap">
          <div className="services-editorial-list" role="list">
            {serviceItems.map((service) => (
              <article className="service-editorial-item" key={service.title} role="listitem">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact services-process-section">
        <div className="wrap">
          <div className="services-section-title">
            <h2>Cómo trabajamos</h2>
            <p>Nuestra metodología de trabajo explicada paso a paso.</p>
          </div>
          <Accordion items={workSteps} numbered />
        </div>
      </section>

      <section className="section section-compact services-faq-section">
        <div className="wrap">
          <div className="services-section-title">
            <h2>Preguntas frecuentes</h2>
            <p>Resolvemos las dudas más comunes antes de iniciar un proyecto o trámite.</p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="section section-compact">
        <div className="wrap home-cta-section services-cta">
          <div>
            <div className="kicker">Nuevo encargo</div>
            <h2>¿Quiere consultar un proyecto?</h2>
            <p className="section-copy">Cuéntenos la idea, el inmueble o el trámite que necesita resolver.</p>
          </div>
          <Link className="cta-link" to="/contacto">Consultar proyecto</Link>
        </div>
      </section>
    </>
  )
}
