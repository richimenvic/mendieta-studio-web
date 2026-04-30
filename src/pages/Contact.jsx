import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="page-hero contact-page">
      <div className="wrap contact-intro">
        <div>
          <div className="kicker">Contacto</div>
          <h1>Hablemos de su próximo proyecto</h1>
          <p className="section-copy">Cuéntenos qué necesita desarrollar: una vivienda, una reforma, un proyecto institucional, documentación técnica o apoyo profesional para avanzar con más claridad.</p>
        </div>
        <aside className="box contact-side-note" aria-label="Información orientativa">
          <h3>Para preparar mejor la respuesta</h3>
          <p>Puede incluir ubicación, tipo de proyecto, fase actual, superficie aproximada y plazo previsto. Con esa información podremos orientar mejor los siguientes pasos.</p>
        </aside>
      </div>
      <div className="wrap">
        <div className="box contact-form-box"><ContactForm /></div>
      </div>
    </main>
  )
}
