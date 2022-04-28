import Link from 'next/link'

import { ProjectCard } from './ProjectCard'
import { projects } from '../../utils/projects'
import { Container, ProjectsContainer } from './styles'

export function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>

      <ProjectsContainer>
        {projects.map((project) => (
          <Link key={project.id} href={project.githubRepo} passHref>
            <a target="_blank">
              <ProjectCard project={project} />
            </a>
          </Link>
        ))}
      </ProjectsContainer>
    </Container>
  )
}
