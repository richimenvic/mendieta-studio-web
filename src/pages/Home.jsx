import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial"><div className="wrap"><div className="kicker">Mendieta Studio · Arquitectura</div><h1>Arquitectura profesional con visión contemporánea y rigor técnico.</h1></div></section>
      <section className="section section-featured"><div className="wrap"><div className="section-head"><div className="kicker">Proyectos destacados</div></div>{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></section>
      <section className="section"><div className="wrap cta-section"><div><div className="kicker">Servicios</div><h2>Arquitectura, técnica y coordinación para proyectos exigentes.</h2></div><Link className="cta-link" to="/servicios">Ver servicios</Link></div></section>
    </main>
  )
}
