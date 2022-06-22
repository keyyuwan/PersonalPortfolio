import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

import { workExperience, IWorkExperience } from '../../utils/workExperience'

import { Container } from '../../components/Container'

import {
  Header,
  About,
  Activities,
  Divider,
} from '../../styles/pages/experience/slug'

interface IExperience {
  experience: IWorkExperience
}

export default function Experience({ experience }: IExperience) {
  const { back } = useRouter()

  return (
    <Container>
      <Header>
        <div className="icon-container" onClick={back}>
          <FaArrowLeft size={24} />
        </div>
        <h1>{experience.name}</h1>
      </Header>

      <About>
        <img
          src={experience.imgUrl}
          alt="Logo da empresa Dorper Brasil Tecnologia Ltda (Ovelha)"
        />

        <div className="content">
          {experience.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a href="https://dorper.app" target="_blank" rel="noreferrer">
            Plataforma Web
          </a>
        </div>
      </About>

      <Divider />

      <Activities>
        <div className="list">
          <ul>
            {experience.activitiesList.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>

          <img src="/certificate.svg" alt="Pessoas com certificado" />
        </div>
      </Activities>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const experience = workExperience.find(
    (experience) => experience.slug === params.slug
  )

  return {
    props: {
      experience,
    },
  }
}
