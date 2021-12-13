import Link from 'next/link'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </nav>
    </Container>
  )
}
