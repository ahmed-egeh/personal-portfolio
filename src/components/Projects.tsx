import type { Project } from '../types/portfolio'
import { ExternalLinkIcon, FolderIcon, GitHubIcon } from './Icons'

type ProjectsProps = {
  label: string
  items: Project[]
}

export function Projects({ label, items }: ProjectsProps) {
  return (
    <section className="section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">
        <FolderIcon className="icon" />
        {label}
      </h2>
      <ul className="project-list">
        {items.map((project) => (
          <li key={project.title} className="project-card">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={220}
              height={140}
            />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="chips">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="icon" />
                GitHub
                <ExternalLinkIcon className="icon icon-ext" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
