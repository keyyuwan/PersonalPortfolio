import styled from 'styled-components'

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  h1 {
    font-size: 1.5rem;
  }

  nav {
    height: 5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      position: relative;
      transition: filter 0.2s;
      line-height: 5rem;

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

  @media (max-width: 767px) {
    justify-content: center;

    h1 {
      display: none;
    }
  }
`
