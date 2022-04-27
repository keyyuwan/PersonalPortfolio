import { ActiveLink } from './ActiveLink'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <ActiveLink activeClassName="active" href="/">
          <a>Key</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/experience">
          <a>Experiência</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/contact">
          <a>Contato</a>
        </ActiveLink>
      </nav>
    </Container>
  )
}
