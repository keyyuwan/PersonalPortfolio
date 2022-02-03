import { MainInfo } from '../components/MainInfo'
import { Projects } from '../components/Projects'
import { Container } from '../styles/home'

export default function Home() {
  return (
    <Container>
      <MainInfo />
      <Projects />
    </Container>
  )
}
