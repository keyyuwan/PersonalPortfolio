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
              performant and well designed web applications.
            </p>
            <div className="techs-list">
              <strong className="title">
                Technologies I have experience with:
              </strong>

              <div className="tech">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                  alt="ReactJS logo"
                />
                <strong>ReactJS</strong>
              </div>
              <div className="tech">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                  alt="Next.js logo"
                />
                <strong>Next.js</strong>
              </div>
              <div className="tech">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                  alt="Typescript logo"
                />
                <strong>Typescript</strong>
              </div>
            </div>
          </div>
        </OverviewInfo>
      </Content>
    </Container>
  )
}
