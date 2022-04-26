import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaGithub, FaGoogle } from 'react-icons/fa'
import { Container } from './styles'

export default function Contact() {
  return (
    <Container>
      <div className="box">
        <Link href="https://github.com/keyyuwan" passHref>
          <a target="_blank">
            <FaGithub /> Github
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/key-yu-wan" passHref>
          <a target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </Link>
        <Link href="https://www.instagram.com/keyyuwan/" passHref>
          <a target="_blank">
            <FaInstagram /> Instagram
          </a>
        </Link>
        <div>E-mail: keyflcbyuwan@gmail.com</div>
      </div>
    </Container>
  )
}
