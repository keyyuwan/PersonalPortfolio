import Link from 'next/link'
import { Container } from './styles'

interface ExperienceCardProps {
  title: string
  description: string
  slug: string
}

export function ExperienceCard({
  title,
  description,
  slug,
}: ExperienceCardProps) {
  return (
    <Link href={`/experience/${slug}`}>
      <Container>
        <span>WORK EXPERIENCE</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </Container>
    </Link>
  )
}
