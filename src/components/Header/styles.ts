import styled from 'styled-components'

export const Container = styled.div`
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};

  nav {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
      position: relative;
      transition: filter 0.2s;

      :hover {
        filter: brightness(0.8);
      }
    }

    a.active {
      color: ${({ theme }) => theme.colors.cyan};
      font-weight: bold;

      &::after {
        content: '';
        height: 2px;
        border-radius: 0 0 3px 3px;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${({ theme }) => theme.colors.cyan};
      }
    }
  }

  @media (min-width: 768px) {
    nav {
      gap: 4rem;

      a {
        font-size: 1.3rem;
      }
    }
  }
`
