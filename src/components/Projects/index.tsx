import Link from 'next/link'
import { projects } from '../../utils/projects'
import { Container, Content } from './styles'

export function Projects() {
  return (
    <Container>
      <h1>Projects</h1>

      <Content>
        {projects.map((project) => (
          <Link key={project.id} href={project.githubRepo} passHref>
            <a target="_blank">
              <div className="card">
                <img src={project.img} alt={project.name} />

                <div className="card-info">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p className="techs-used">
                    {project.techs.map((tech) => `${tech} | `)}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Content>
    </Container>
  )
}
