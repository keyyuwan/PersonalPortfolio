import styled from 'styled-components'

export const Title = styled.h1`
  margin: 2rem 0;
  background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ExperienceCardsContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 500px;
  }
`
