import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.cyan};
  }
`

export const Content = styled.div`
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: inline-block;

    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }

    .card {
      background: ${({ theme }) => theme.colors.gray[800]};
      border-radius: 8px;

      img {
        border-radius: 8px 8px 0 0;
        width: 100%;
      }

      .card-info {
        padding: 0.5rem 1rem;

        p {
          margin-top: 0.5rem;
        }

        p.techs-used {
          color: ${({ theme }) => theme.colors.cyan};
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    a {
      margin-top: 0;

      .card {
        width: 500px;
        height: 480px;

        img {
          width: 500px;
          height: 300px;
        }
      }
    }
  }
`
