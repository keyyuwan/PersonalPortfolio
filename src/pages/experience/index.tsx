import { Container, Content, Header, MyExperience, DorperInfo } from './styles'

export default function DevExperience() {
  return (
    <Container>
      <Content>
        <Header>
          <img src="/dorper-branco.svg" alt="Logo Dorper" />
          <h2>Dorper Brasil Tecnologia</h2>
        </Header>

        <MyExperience>
          <h2>Minha experiência</h2>

          <p>
            Sou desenvolvedor Front-End da Dorper em que trabalhamos na stack de
            <span> ReactJS</span> e <span>Typescript</span>.
          </p>

          <div className="skills-list-container">
            <ul>
              <li>Trabalho em cima da metodologia ágil SCRUM;</li>
              <li>Versiono o código utilizando Git e Github;</li>
              <li>Trabalho em equipe com os desenvolvedores;</li>
              <li>Lido com bibliotecas externas que a aplicação necessite;</li>
              <li>
                Estilizo a aplicação usando CSS-in-JS (Styled Components);
              </li>
              <li>Consumo uma API REST feita em Node.js;</li>
            </ul>

            <img src="/certificate.svg" alt="Pessoas com certificado" />
          </div>
        </MyExperience>

        <DorperInfo>
          <h2>Sobre</h2>

          <div className="dorper-info-content">
            <p>
              Uma plataforma que possibilita compartilhar seu tempo,
              conhecimentos, habilidades e experiências através de videochamada
              de forma remunerada.{' '}
              <span>
                O propósito é conectar pessoas para a disseminação de
                conhecimento e geração de oportunidades.
              </span>
            </p>

            <img src="/people-connecting.svg" alt="Pessoas se conectando" />
          </div>
        </DorperInfo>
      </Content>
    </Container>
  )
}
