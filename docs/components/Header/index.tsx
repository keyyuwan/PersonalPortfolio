import Link from 'next/link'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <Link href="/">Projetos</Link>
        <Link href="/experience">Dev Experience</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </Container>
  )
}
