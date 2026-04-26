import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="featured-project">
      <div className="featured-project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <dl className="project-facts">
          {project.location && <div><dt>Ubicación</dt><dd>{project.location}</dd></div>}
          <div><dt>Año</dt><dd>{project.year}</dd></div>
          {project.type && <div><dt>Tipología</dt><dd>{project.type}</dd></div>}
          {project.status && <div><dt>Estado</dt><dd>{project.status}</dd></div>}
          {project.phase && <div><dt>Fase actual</dt><dd>{project.phase}</dd></div>}
          {project.client && <div><dt>Cliente</dt><dd>{project.client}</dd></div>}
          <div><dt>Rol</dt><dd>{project.role}</dd></div>
        </dl>
        <Link className="text-link" to={`/proyectos/${project.slug}`}>Ver proyecto</Link>
      </div>
    </article>
  )
}
