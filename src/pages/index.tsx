import Head from 'next/head'
import { MainInfo } from '../components/MainInfo'
import { Projects } from '../components/Projects'
import { Container } from '../styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Key Yu Wan</title>
      </Head>
      <Container>
        <MainInfo />
        <Projects />
      </Container>
    </>
  )
}
