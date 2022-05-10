import { Container, ProjectImage } from './styles'

interface IProject {
  img: string
  name: string
  description: string
  techs: string[]
}

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Container>
      <ProjectImage image={project.img} />
      {/* <img src={project.img} alt={project.name} /> */}

      <div className="project-info">
        <h2>{project.name}</h2>
        <p className="description">{project.description}</p>
        <p className="techs-used">
          {project.techs.map((tech) => `${tech} | `)}
        </p>
      </div>
    </Container>
  )
}
