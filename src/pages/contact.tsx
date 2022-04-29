import Head from 'next/head'
import { FaLinkedin, FaInstagram, FaGithub, FaGoogle } from 'react-icons/fa'

import { ContactCard } from '../components/Contact/ContactCard'

import { Container } from '../styles/pages/contact'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | Key Yu Wan</title>
      </Head>
      <Container>
        <div className="box">
          <ContactCard
            href="https://github.com/keyyuwan"
            icon={<FaGithub />}
            title="Github"
          />
          <ContactCard
            href="https://www.linkedin.com/in/key-yu-wan"
            icon={<FaLinkedin />}
            title="LinkedIn"
          />
          <ContactCard
            href="https://www.instagram.com/keyyuwan/"
            icon={<FaInstagram />}
            title="Instagram"
          />
          <div className="email-card">
            <FaGoogle />
            <strong>keyflcbyuwan@gmail.com</strong>
          </div>
        </div>
      </Container>
    </>
  )
}
