import Head from 'next/head'
import { FaDownload } from 'react-icons/fa'

import { Projects } from '../components/Projects'
import { Container } from '../components/Container'

import { techs } from '../utils/techs'

import {
  Greetings,
  KeyWrapper,
  Avatar,
  InfoAboutMe,
  DownloadButtonContainer,
  DownloadCVButton,
  Description,
  StackContainer,
  Tech,
} from '../styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Key Yu Wan</title>
      </Head>
      <Container>
        <Greetings>
          <h1>👋 Bem-vindo(a) ao meu portfólio.</h1>
        </Greetings>

        <KeyWrapper>
          <Avatar src="https://github.com/keyyuwan.png" alt="Key Yu Wan" />

          <InfoAboutMe>
            <span>
              <strong>Key Yu Wan</strong>, 19
            </span>
            <p>📍 Curitiba, Brasil</p>
          </InfoAboutMe>
        </KeyWrapper>

        <DownloadButtonContainer>
          <DownloadCVButton href="/CV-KEY.pdf" download>
            <FaDownload />
            Download CV
          </DownloadCVButton>
        </DownloadButtonContainer>

        <StackContainer>
          {techs.map((tech) => (
            <Tech key={tech.id}>
              <img src={tech.img_url} alt={tech.name} />
              <strong>{tech.name}</strong>
            </Tech>
          ))}
        </StackContainer>

        <Description>
          Apaixonado por desenvolvimento Web e Mobile e por poder impactar na
          vida de pessoas achando soluções modernas e resolvendo problemas
          através da tecnologia.
        </Description>

        <Projects />
      </Container>
    </>
  )
}
