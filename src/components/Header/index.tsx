import Link from 'next/link'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/experience">Experiência</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </Container>
  )
}
