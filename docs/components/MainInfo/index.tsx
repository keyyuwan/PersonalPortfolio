import { techs } from '../../utils/techs'
import { Container, Content, MyInfo, OverviewInfo } from './styles'

export function MainInfo() {
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
              <strong>Key Yu Wan</strong>, 18
            </span>
            <p>📍 Curitiba, Brasil</p>
            <p>Front-end</p>
          </div>
        </MyInfo>
        <OverviewInfo>
          <h1>Oi! Meu nome é Key e sou desenvolvedor 👋</h1>
          <div className="techs">
            <p>
              {`<Muito do que vivemos hoje é por causa da tecnologia, ela melhorou
              a facilitou as formas como fazemos as coisas. Pra mim, desenvolver
              é uma forma de achar soluções e resolver problemas da sociedade
              através da mesma via. />`}
            </p>

            <strong className="title">
              Tecnologias que tenho experiência:
            </strong>

            <div className="techs-list">
              {techs.map((tech) => (
                <div key={tech.id} className="tech">
                  <img src={tech.img_url} alt={tech.name} />
                  <strong>{tech.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </OverviewInfo>

        <div className="continuation">
          <p>👇 Projetos...</p>
        </div>
      </Content>
    </Container>
  )
}
