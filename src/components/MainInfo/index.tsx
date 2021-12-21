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
          <h1>Hey, I'm Key, Web Dev 👋</h1>
          <div className="techs">
            <p>
              A lot of we are experiencing today, it's because of technology, it
              improved and made easier the ways we do things. For me, developing
              is a way of finding solutions and solving society's problems
              through the same way.
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

        <div className="continuation">
          <p>👇 Projects...</p>
        </div>
      </Content>
    </Container>
  )
}
