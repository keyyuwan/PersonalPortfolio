import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 3rem auto 0;
  padding: 0 2rem;
  padding-bottom: 2rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.cyan};
  }
`

export const ProjectsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  a {
    display: inline-block;
    width: 100%;
  }
`
