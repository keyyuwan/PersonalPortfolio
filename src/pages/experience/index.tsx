import Head from 'next/head'
import { ExperienceCard } from '../../components/Experience/ExperienceCard'

import { Container } from '../../styles/Container'
import { Title, ExperienceCardsContainer } from '../../styles/pages/experience'

const DORPER_SLUG = 'dorper-brasil-tecnologia-ltda'

export default function WorkExperience() {
  return (
    <>
      <Head>
        <title>Experiência | Key Yu Wan</title>
      </Head>
      <Container>
        <Title>Experiência como Dev</Title>

        <ExperienceCardsContainer>
          <ExperienceCard
            title="Dorper Brasil Tecnologia Ltda"
            description="
            Como Dev. Front-end eu ajudei a desenvolver a plataforma Web da
              Dorper com ReactJS + TypeScript, que permite usuários terem aulas
              e consultorias pagas por vídeo chamada.
            "
            slug={DORPER_SLUG}
          />
        </ExperienceCardsContainer>
      </Container>
    </>
  )
}
