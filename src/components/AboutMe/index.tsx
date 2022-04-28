import { techs } from '../../utils/techs'
import {
  Container,
  Content,
  MyInfo,
  OverviewInfo,
  StackContainer,
  Tech,
} from './styles'

export function AboutMe() {
  return (
    <Container>
      <Content>
        <MyInfo>
          <img
            src="https://github.com/keyyuwan.png"
            alt="Key Yu Wan"
            className="avatar"
          />
          <div className="info">
            <span>
              <strong>Key Yu Wan</strong>, 19
            </span>
            <p>📍 Curitiba, Brasil</p>
          </div>
        </MyInfo>
        <OverviewInfo>
          <h1>
            Oi! 👋 <br />
            Sou um desenvolvedor <span>Front-end</span> apaixonado por
            tecnologia.
          </h1>
          <StackContainer>
            {techs.map((tech) => (
              <Tech key={tech.id}>
                <img src={tech.img_url} alt={tech.name} />
                <strong>{tech.name}</strong>
              </Tech>
            ))}
          </StackContainer>

          <p className="quote">
            {`<Muito do que vivemos hoje é por causa da tecnologia, ela melhorou
              e facilitou as formas como fazemos as coisas. Pra mim, ser Dev
              é uma forma de achar soluções e resolver problemas da sociedade
              através da tecnologia. />`}
          </p>
        </OverviewInfo>
      </Content>
    </Container>
  )
}
