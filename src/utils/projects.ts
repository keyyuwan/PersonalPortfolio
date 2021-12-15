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
]
