import styled from 'styled-components'

export const Container = styled.div`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  margin: 1rem 1rem 0;
  border-radius: 8px;

  nav {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
`
