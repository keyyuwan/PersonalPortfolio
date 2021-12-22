import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaGithub, FaGoogle } from 'react-icons/fa'
import { Container } from '../styles/contact'

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
            <FaLinkedin /> Linkedin
          </a>
        </Link>
        <Link href="https://www.instagram.com/keyyuwan/" passHref>
          <a target="_blank">
            <FaInstagram /> Instagram
          </a>
        </Link>
        <div>
          <FaGoogle /> Gmail: keyflcbyuwan@gmail.com
        </div>
      </div>
    </Container>
  )
}
