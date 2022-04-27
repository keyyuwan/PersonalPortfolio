import Link from 'next/link'
import { projects } from '../../utils/projects'
import { Container, ProjectsContainer, ProjectCard } from './styles'

export function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>

      <ProjectsContainer>
        {projects.map((project) => (
          <Link key={project.id} href={project.githubRepo} passHref>
            <a target="_blank">
              <ProjectCard>
                <img src={project.img} alt={project.name} />

                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p className="description">{project.description}</p>
                  <p className="techs-used">
                    {project.techs.map((tech) => `${tech} | `)}
                  </p>
                </div>
              </ProjectCard>
            </a>
          </Link>
        ))}
      </ProjectsContainer>
    </Container>
  )
}
