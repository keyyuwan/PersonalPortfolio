import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { socialMedia } from '../utils/socialMedia'
import { Container, Content } from '../styles/experience'

export default function DevExperience() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return (
    <Container>
      <Content>
        <div className="header">
          <img src="/dorper-branco.svg" alt="Logo Dorper" />
          <h2>Dorper Brasil Tecnologia</h2>
        </div>
        <div className="my-experience">
          <h2>Minha experiência</h2>
          Sou desenvolvedor Front-End da Dorper em que trabalhamos na stack de
          ReactJS e Typescript. <br /> <br />
          <ul>
            <li>Trabalho em cima da metodologia ágil SCRUM;</li>
            <li>Versiono o código utilizando Git e Github;</li>
            <li>Trabalho em equipe com os desenvolvedores;</li>
            <li>Lido com bibliotecas externas que a aplicação necessite;</li>
            <li>Estilizo a aplicação usando CSS-in-JS (Styled Components);</li>
            <li>Consumo uma API REST feita em Node.js;</li>
          </ul>
        </div>
        <div className="dorper-info">
          <h2>Sobre</h2>
          <p>
            Uma plataforma que possibilita compartilhar seu tempo,
            conhecimentos, habilidades e experiências através de videochamada de
            forma remunerada. O propósito é conectar pessoas para a disseminação
            de conhecimento e geração de oportunidades.
          </p>
          <img
            src={
              isDesktop
                ? '/dorper-inicio-desktop.png'
                : '/dorper-inicio-responsivo.png'
            }
            alt="Página Ofertas Dorper"
          />
          <Link href="https://dorper.app" passHref>
            <a target="_blank">https://dorper.app</a>
          </Link>
        </div>
        <div className="social-media-container">
          <h2>Redes Sociais</h2>
          {socialMedia.map((rede) => (
            <div key={rede.id} className="social-media">
              {rede.name}:{' '}
              <Link href={rede.link} passHref>
                <a target="_blank">{rede.link}</a>
              </Link>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  )
}
