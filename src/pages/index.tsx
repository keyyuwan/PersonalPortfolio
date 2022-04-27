import Head from 'next/head'
import { AboutMe } from '../components/AboutMe'
import { Projects } from '../components/Projects'
import { Container } from '../styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Key Yu Wan</title>
      </Head>
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </>
  )
}
