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
              <strong>Key</strong>, 18
            </span>
            <p>📍 Curitiba, Brasil</p>
            <p>Front-end</p>
          </div>
        </MyInfo>
        <OverviewInfo>
          <h1>Hey, I'm Key Yu Wan, Web Dev 👋</h1>
          <div className="techs">
            <p>
              Focused on the best front-end technologies to build good
              performant and well designed applications.
            </p>

            <strong className="title">
              Technologies I have experience with:
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
      </Content>
    </Container>
  )
}
