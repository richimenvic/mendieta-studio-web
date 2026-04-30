import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="page-hero contact-page">
      <div className="wrap contact-intro">
        <div>
          <div className="kicker">Contacto</div>
          <h1>Hablemos de su proyecto</h1>
          <p className="section-copy">Cuéntenos qué necesita: una vivienda, una reforma, una licencia, documentación técnica o apoyo profesional.</p>
        </div>
        <aside className="box contact-side-note" aria-label="Información orientativa">
          <h3>Qué puede enviar</h3>
          <p>Ubicación, tipo de proyecto, superficie aproximada, fase actual y cualquier plano o idea que ya tenga.</p>
        </aside>
      </div>
      <div className="wrap">
        <div className="box contact-form-box"><ContactForm /></div>
      </div>
    </main>
  )
}
