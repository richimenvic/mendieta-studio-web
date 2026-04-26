export default function Studio() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <div className="kicker">Estudio</div>
          <h1>Mendieta Studio</h1>
          <p className="lead">
            Mendieta Studio desarrolla proyectos arquitectónicos con un enfoque centrado en la claridad
            conceptual, la precisión técnica y la coordinación integral entre disciplinas.
          </p>
        </div>
      </main>

      <section className="section section-compact">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Enfoque</div>
            <p className="section-copy section-copy-compact">
              Cada proyecto se aborda desde una visión equilibrada entre diseño, funcionalidad y viabilidad
              constructiva, buscando soluciones arquitectónicas sobrias, precisas y duraderas.
            </p>
          </div>

          <div className="studio-grid">
            <article className="box">
              <h3>Metodología</h3>
              <p>
                El estudio trabaja mediante procesos rigurosos de desarrollo, documentación y coordinación
                técnica, integrando arquitectura, estructura e instalaciones desde etapas tempranas del
                proyecto.
              </p>
            </article>

            <article className="box">
              <h3>Experiencia y valor añadido</h3>
              <p>
                Con experiencia en proyectos residenciales, institucionales y corporativos de distinta escala,
                Mendieta Studio colabora en entornos locales e internacionales, aplicando metodologías BIM y
                estándares avanzados de documentación.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
