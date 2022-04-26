import styled from 'styled-components'

export const Container = styled.div`
  height: 4rem;
  border-radius: 0 0 8px 8px;

  nav {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
      font-weight: bold;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.cyan};

      transition: filter 0.2s;

      :hover {
        filter: brightness(0.8);
      }
    }
  }
`
