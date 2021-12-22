import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  .continuation {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
  }
`

export const MyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .info {
    span {
      display: inline-block;
    }

    span,
    p {
      margin-top: 0.25rem;
    }
  }
`

export const OverviewInfo = styled.div`
  margin-top: 1rem;

  h1 {
    font-size: 2rem;
  }

  .techs {
    margin-top: 1rem;

    .title {
      color: ${({ theme }) => theme.colors.cyan};
      display: inline-block;
      margin-top: 1rem;
    }

    .techs-list {
      margin-top: 1rem;

      strong {
        display: inline-block;
        line-height: 1.25rem;
      }

      .tech {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
          width: 32px;
          border-radius: 8px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .techs {
      .techs-list {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
    }
  }
`
