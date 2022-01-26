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
    techs: ['ReactJS', 'Styled-Components', 'SASS', 'TypeScript', 'MirageJS'],
    githubRepo: 'https://github.com/keyyuwan/manageyourmoney',
  },
  {
    id: 3,
    name: 'Pomodoro Timer',
    img: '/pomodoroTimer.gif',
    description: 'Timer pomodoro com notificação de browser e theme switcher.',
    techs: ['ReactJS', 'CSS Modules'],
    githubRepo: 'https://github.com/keyyuwan/PomodoroTimer',
  },
  {
    id: 4,
    name: 'Twitter UI Clone',
    img: '/tt-clone-gif.gif',
    description:
      'Tela do perfil do Twitter feito com ReactJS e Styled Components.',
    techs: ['ReactJS', 'Styled Components'],
    githubRepo: 'https://github.com/keyyuwan/ReactJS-Twitter-Clone',
  },
  {
    id: 5,
    name: 'Let me ask',
    img: '/letmeask.png',
    description:
      'Crie salas para visualizar e responder perguntas. Você pode entrar em uma para fazer perguntas também.',
    techs: [
      'ReactJS',
      'TypeScript',
      'SCSS (SASS)',
      'Firebase (Realtime Database)',
    ],
    githubRepo: 'https://github.com/keyyuwan/Letmeask',
  },
  {
    id: 6,
    name: 'WheaterApp',
    img: '/weather.gif',
    description:
      'Procure sobre o tempo de qualquer cidade. Feito com a API do openweathermap.',
    techs: ['ReactJS'],
    githubRepo: 'https://github.com/keyyuwan/WeatherApp',
  },
  {
    id: 7,
    name: 'Compliment',
    img: '/compliment.png',
    description:
      'Já elogiou alguém hoje? Elogie usuários e veja elogios que você recebeu.',
    techs: ['ReactJS', 'TypeScript', 'Next.js', 'ChakraUI'],
    githubRepo: 'https://github.com/keyyuwan/Compliment-ReactJS',
  },
]
