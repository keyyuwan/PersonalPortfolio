interface ProjectsData {
  id: number
  name: string
  img: string
  description: string
  techs: Array<string>
  githubRepo: string
}

export const projects: ProjectsData[] = [
  {
    id: 1,
    name: 'Podcastr',
    img: '/podcastr_gif.gif',
    description:
      'Aplicação em que conseguimos ouvir podcasts e fazer uma leitura prévia sobre cada episódio.',
    techs: ['ReactJS', 'Next.js', 'SASS', 'TypeScript'],
    githubRepo: 'https://github.com/keyyuwan/Podcastr',
  },
  {
    id: 2,
    name: 'Manage Your Money',
    img: '/dtmoney.png',
    description:
      'Manage Your Money é um projeto de controle/organização financeira.',
    techs: ['ReactJS', 'Styled-Components', 'TypeScript', 'MirageJS'],
    githubRepo: 'https://github.com/keyyuwan/manageyourmoney',
  },
  {
    id: 3,
    name: 'Twitter UI Clone',
    img: '/tt-clone-gif.gif',
    description:
      'Tela do perfil do Twitter feito com ReactJS e Styled Components.',
    techs: ['ReactJS', 'Styled Components'],
    githubRepo: 'https://github.com/keyyuwan/ReactJS-Twitter-Clone',
  },
  {
    id: 4,
    name: 'Let me ask',
    img: '/letmeask.png',
    description:
      'Crie salas para visualizar e responder perguntas em tempo real. Você pode entrar em uma para fazer perguntas também.',
    techs: [
      'ReactJS',
      'TypeScript',
      'SCSS (SASS)',
      'Firebase (Realtime Database)',
    ],
    githubRepo: 'https://github.com/keyyuwan/Letmeask',
  },
  {
    id: 5,
    name: 'Recp',
    img: '/recp.png',
    description:
      'Explore receitas do mundo e registre suas próprias. Contém autenticação social com Google.',
    techs: [
      'ReactJS',
      'TypeScript',
      'Next.js',
      'Next Auth',
      'Styled Components',
      'React Hook Form',
    ],
    githubRepo: 'https://github.com/keyyuwan/Recp',
  },
  {
    id: 6,
    name: 'AuthNext',
    img: '/authnext.jpg',
    description:
      'Projeto de autenticação e autorização com controle de rotas pelo server-side.',
    techs: [
      'ReactJS',
      'TypeScript',
      'Next.js',
      'SCSS (SASS)',
      'Axios',
      'ApexCharts',
    ],
    githubRepo: 'https://github.com/keyyuwan/AuthNext',
  },
]
