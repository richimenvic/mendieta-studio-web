import { useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <main className="page-hero"><div className="wrap"><h1>Proyecto no encontrado</h1></div></main>

  return (
    <main className="page-hero">
      <div className="wrap">
        <div className="kicker">Proyecto</div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <dl className="project-facts">
          {Object.entries({ Ubicación: project.location, Año: project.year, Estado: project.status, 'Fase actual': project.phase, Cliente: project.client, Rol: project.role, Tipología: project.type }).map(([k, v]) => v && <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        {project.legalNote && <p className="legal-note">{project.legalNote}</p>}
      </div>
    </main>
  )
}
