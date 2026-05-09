import { useEffect, useRef, useState } from 'react'

const inquiryOptions = [
  'Arquitectura',
  'Desarrollo de proyecto',
  'Documentación técnica',
  'Coordinación BIM',
  'Consultoría técnica',
  'Otro'
]

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inquiryType, setInquiryType] = useState('')
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSelectOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setStatus('Por favor, complete los campos requeridos correctamente.')
      setError(true)
      form.reportValidity()
      return
    }

    setLoading(true)
    setStatus('')
    setError(false)

    const formData = new FormData(form)
    formData.append('subject', 'Nueva consulta desde Mendieta Studio')

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const result = await response.json()
      if (result.success) {
        setStatus('Gracias por su mensaje. Nos pondremos en contacto con usted a la mayor brevedad posible.')
        form.reset()
        setInquiryType('')
      } else {
        setError(true)
        setStatus('No se pudo enviar su consulta. Inténtelo nuevamente en unos minutos.')
      }
    } catch {
      setError(true)
      setStatus('No se pudo enviar su consulta. Revise su conexión e inténtelo nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="access_key" value="9d064af6-bb40-4732-9a1f-519b6da716a6" />
      <input type="checkbox" name="botcheck" className="hidden-field" tabIndex="-1" autoComplete="off" />
      <div className="contact-form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre completo</label>
          <input id="contact-name" name="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Correo electrónico</label>
          <input id="contact-email" name="email" type="email" required />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-company">
            Empresa / Organización <span>(opcional)</span>
          </label>
          <input id="contact-company" name="company" />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-inquiry-type">Tipo de consulta</label>
          <div className={`select-wrap ${isSelectOpen ? 'is-open' : ''}`} ref={selectRef}>
            <input id="contact-inquiry-type" name="inquiry_type" type="hidden" value={inquiryType} required />
            <button
              type="button"
              className={`select-trigger ${inquiryType ? 'has-value' : ''}`}
              aria-haspopup="listbox"
              aria-expanded={isSelectOpen}
              aria-labelledby="contact-inquiry-type"
              onClick={() => setIsSelectOpen((open) => !open)}
            >
              {inquiryType || 'Seleccione una opción'}
            </button>
            <ul className="select-menu" role="listbox" aria-label="Tipo de consulta">
              {inquiryOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    className={`select-option ${inquiryType === option ? 'is-selected' : ''}`}
                    role="option"
                    aria-selected={inquiryType === option}
                    onClick={() => {
                      setInquiryType(option)
                      setIsSelectOpen(false)
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea id="contact-message" name="message" rows="6" required />
        </div>
      </div>
      <div className="contact-form-actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Consulta'}
        </button>
        {status && <p className={`form-status ${error ? 'error' : 'success'}`}>{status}</p>}
      </div>
    </form>
  )
}
