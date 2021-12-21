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
      'In this application we can listen to podcasts and read the description about them.',
    techs: ['ReactJS', 'Next.js', 'SASS', 'TypeScript'],
    githubRepo: 'https://github.com/keyyuwan/Podcastr',
  },
  {
    id: 2,
    name: 'Manage Your Money',
    img: '/dtmoney.png',
    description: 'Manage Your Money is a finance control project.',
    techs: ['ReactJS', 'Styled-Components', 'SASS', 'TypeScript', 'MirageJS'],
    githubRepo: 'https://github.com/keyyuwan/manageyourmoney',
  },
  {
    id: 3,
    name: 'Pomodoro Timer',
    img: '/pomodoroTimer.gif',
    description:
      'This project is a Pomodoro timer with browser notification and theme switcher.',
    techs: ['ReactJS', 'CSS Modules'],
    githubRepo: 'https://github.com/keyyuwan/PomodoroTimer',
  },
  {
    id: 4,
    name: 'Twitter UI Clone',
    img: '/tt-clone-gif.gif',
    description:
      'Twitter profile screen cloned with ReactJS and Styled Components.',
    techs: ['ReactJS', 'Styled Components'],
    githubRepo: 'https://github.com/keyyuwan/ReactJS-Twitter-Clone',
  },
  {
    id: 5,
    name: 'Let me ask',
    img: '/letmeask.png',
    description:
      'Create rooms to view and answer questions. You can enter in one to ask questions too.',
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
    description: 'Search for any city weather. Used the openweathermap API.',
    techs: ['ReactJS'],
    githubRepo: 'https://github.com/keyyuwan/WeatherApp',
  },
]
