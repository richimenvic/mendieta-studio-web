import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="page-hero contact-page">
      <div className="wrap contact-intro">
        <div>
          <div className="kicker">Contacto</div>
          <h1>Cuéntenos qué necesita</h1>
          <p className="section-copy">Vivienda, reforma, licencia, proyecto técnico o documentación.</p>
        </div>
        <aside className="box contact-side-note" aria-label="Información orientativa">
          <h3>Datos útiles</h3>
          <p>Ubicación · Tipo de obra · Superficie · Plazo · Planos o ideas disponibles.</p>
        </aside>
      </div>
      <div className="wrap">
        <div className="box contact-form-box"><ContactForm /></div>
      </div>
    </main>
  )
}
