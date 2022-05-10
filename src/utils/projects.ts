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
    img: '/Podcastr.svg',
    description:
      'Aplicação em que conseguimos ouvir podcasts e fazer uma leitura prévia sobre cada episódio.',
    techs: ['ReactJS', 'Next.js', 'SCSS (SASS)', 'TypeScript'],
    githubRepo: 'https://github.com/keyyuwan/Podcastr',
  },
  {
    id: 2,
    name: 'Twitter UI Clone',
    img: '/TwitterClone.png',
    description:
      'Tela do perfil do Twitter feito com ReactJS e Styled Components.',
    techs: ['ReactJS', 'Styled Components'],
    githubRepo: 'https://github.com/keyyuwan/ReactJS-Twitter-Clone',
  },
  {
    id: 3,
    name: 'WidgetForFeedback',
    img: '/WidgetForFeedback.png',
    description:
      'WidgetForFeedback é um projeto FullStack em que os usuários podem enviar feedbacks para o dono de algum website/app mobile.',
    techs: [
      'ReactJS',
      'TypeScript',
      'Tailwindcss',
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'Prisma',
      'Jest',
    ],
    githubRepo: 'https://github.com/keyyuwan/WidgetForFeedback',
  },
  {
    id: 4,
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
    id: 5,
    name: 'React News',
    img: '/ReactNews.svg',
    description:
      'Página de posts sobre a tecnologia ReactJS com opção de assinatura paga e autenticação social com Github. Contém testes unitários.',
    techs: [
      'ReactJS',
      'TypeScript',
      'Next.js',
      'SCSS (SASS)',
      'FaunaDB',
      'Jest',
      'React Testing Library',
    ],
    githubRepo: 'https://github.com/keyyuwan/ReactNews',
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
