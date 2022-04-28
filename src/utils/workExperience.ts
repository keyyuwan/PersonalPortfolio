export interface IWorkExperience {
  id: string
  name: string
  slug: string
  imgUrl: string
  activitiesList: string[]
  description: string[]
}

export const workExperience: IWorkExperience[] = [
  {
    id: '1',
    name: 'Dorper Brasil Tecnologia Ltda',
    slug: 'dorper-brasil-tecnologia-ltda',
    imgUrl: '/dorper-branco.svg',
    activitiesList: [
      'Utilizo ReactJS e TypeScript como principais tecnologias',
      'Estilizo a aplicação usando Styled Components',
      'Construo a UI da plataforma com Material-UI',
      'Consumo uma API Rest com Axios',
      'Versiono o código utilizando Git e Github',
      'Trabalho em cima da metodologia ágil SCRUM',
    ],
    description: [
      'Uma plataforma que possibilita compartilhar seu tempo, conhecimentos, habilidades e experiências através de videochamada de forma remunerada.',
      'O propósito é conectar pessoas para a disseminação de conhecimento e geração de oportunidades.',
    ],
  },
]
