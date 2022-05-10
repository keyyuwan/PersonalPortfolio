import { ActiveLink } from './ActiveLink'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <h1>@keyyuwan</h1>

      <nav>
        <ActiveLink activeClassName="active" href="/">
          <a>Sobre</a>
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
